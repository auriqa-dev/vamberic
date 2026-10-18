import {execFileSync} from 'node:child_process';
import {readFileSync,writeFileSync,mkdirSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
const config=JSON.parse(readFileSync(new URL('./deployment.json',import.meta.url)));
const {directory,bucket,distribution,origin}=config;
const aws=a=>execFileSync('aws',[...a,'--region','eu-west-2','--no-cli-pager'],{encoding:'utf8'});
const files=(d,p='')=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(d+'/'+e.name,p+e.name+'/'):[p+e.name]);
const hash=b=>createHash('sha256').update(b).digest('hex');
async function verify(){
 for(const key of files(directory)){
  // Licence files have no public route on directory-index websites; origin bytes are verified separately.
  if(!key.includes('.'))continue;
  const response=await fetch(origin+'/'+key,{signal:AbortSignal.timeout(30000)});
  if(!response.ok||hash(Buffer.from(await response.arrayBuffer()))!==hash(readFileSync(directory+'/'+key)))throw new Error('Public content mismatch: '+key);
 }
 const response=await fetch(origin+'/',{signal:AbortSignal.timeout(30000)});
 if(!response.ok||hash(Buffer.from(await response.arrayBuffer()))!==hash(readFileSync(directory+'/index.html')))throw new Error('Homepage mismatch');
}
function invalidate(){const i=JSON.parse(aws(['cloudfront','create-invalidation','--distribution-id',distribution,'--paths','/*','--output','json']));aws(['cloudfront','wait','invalidation-completed','--distribution-id',distribution,'--id',i.Invalidation.Id]);}
if(process.argv.includes('--verify-only')){await verify();console.log('Live content verification passed');}
else {
 mkdirSync('.release',{recursive:true});
 if(JSON.parse(aws(['sts','get-caller-identity','--output','json'])).Account!=='755905325223')throw new Error('Wrong account');
 aws(['s3','sync','s3://'+bucket+'/','.release/previous/','--only-show-errors']);
 writeFileSync('.release/manifest.json',JSON.stringify({commit:process.env.GITHUB_SHA,config,predecessor:files('.release/previous').map(key=>({key,sha256:hash(readFileSync('.release/previous/'+key))}))},null,2));
 try {
  aws(['s3','sync',directory+'/','s3://'+bucket+'/','--exclude','*.html','--cache-control','public,max-age=3600','--only-show-errors']);
  aws(['s3','sync',directory+'/','s3://'+bucket+'/','--exclude','*','--include','*.html','--cache-control','no-cache','--only-show-errors']);
  aws(['s3','sync','s3://'+bucket+'/','.release/published/','--only-show-errors']);
  for(const key of files(directory))if(hash(readFileSync(directory+'/'+key))!==hash(readFileSync('.release/published/'+key)))throw new Error('Origin content mismatch: '+key);
  invalidate();await verify();
  writeFileSync('.release/result.json',JSON.stringify({status:'verified',commit:process.env.GITHUB_SHA,files:files(directory).length}));
 } catch(error){
  aws(['s3','sync','.release/previous/','s3://'+bucket+'/','--exclude','*.html','--cache-control','no-cache','--only-show-errors']);
  aws(['s3','sync','.release/previous/','s3://'+bucket+'/','--exclude','*','--include','*.html','--cache-control','no-cache','--only-show-errors']);
  invalidate();const response=await fetch(origin+'/',{signal:AbortSignal.timeout(30000)});
  if(!response.ok||hash(Buffer.from(await response.arrayBuffer()))!==hash(readFileSync('.release/previous/index.html')))throw new Error('Rollback verification failed',{cause:error});
  writeFileSync('.release/result.json',JSON.stringify({status:'rolled_back',error:String(error)}));throw error;
 }
}
