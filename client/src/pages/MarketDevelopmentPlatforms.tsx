import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const audiences = [
  "Sell complex, high-value B2B services.",
  "Need to identify emerging opportunities before buyers approach the market.",
  "Operate specialist business units with distinct commercial objectives.",
  "Want a dedicated route to market without creating another internal marketing operation.",
  "Recognise the long-term value of owning a market-facing commercial asset.",
];

const body = "space-y-5 text-lg leading-relaxed text-muted-foreground";
const heading = "text-3xl md:text-4xl font-display font-bold text-white mb-8";
const externalLink = "inline-flex items-center gap-2 text-primary font-semibold hover:underline";

export default function MarketDevelopmentPlatforms() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    document.title = "Market Development Platforms | Vamberic Studio";
    description?.setAttribute("content", "Acquire a dedicated market development capability combining a specialist website, application, market intelligence and an AI-powered commercial engine.");
    return () => {
      document.title = previousTitle;
      if (previousDescription) description?.setAttribute("content", previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-4 sm:px-6 lg:px-8">
          <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
          <div className="relative max-w-5xl mx-auto">
            <h1 className="text-primary text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">Market Development Platforms</h1>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl mb-10">
              Don't just market to your market. <span className="text-gradient">Own a way to develop it.</span>
            </p>
            <div className={`${body} max-w-3xl`}>
              <p>Most businesses approach demand generation by commissioning campaigns, hiring agencies or investing in more sales technology.</p>
              <p>We think there's another way.</p>
              <p className="text-xl md:text-2xl text-white font-medium border-l-2 border-primary pl-6">What if you could acquire an entire market development capability, built around the customers you want to reach and the problems you solve?</p>
              <p>At Vamberic Studio, we create specialist market intelligence and demand generation platforms that businesses can acquire as dedicated commercial assets.</p>
              <p>Each combines a market-facing website, specialist application, structured intelligence database and an AI-powered commercial engine.</p>
              <p>The objective is straightforward: identify opportunities, develop demand and turn market intelligence into commercial outcomes.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
            <h2 className={heading}>An asset, not another campaign</h2>
            <div className={body}>
              <p>Conventional lead generation is typically an ongoing expense. Campaigns run, budgets are spent, activity stops and the process starts again.</p>
              <p className="text-white font-medium">Our approach is different.</p>
              <p>We build a dedicated market development asset around a particular industry, market or commercial opportunity.</p>
              <p>Your business acquires the platform, its dedicated website and its associated market intelligence.</p>
              <p>The platform then becomes an ongoing source of insight, engagement and potential commercial opportunities.</p>
              <p>Instead of continually commissioning new campaigns, you invest in a capability designed to develop your market over time.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto glass-card rounded-2xl p-6 sm:p-10 md:p-12">
            <img src="/built_matters_logo.png" alt="Built Matters logo" width={96} height={96} loading="lazy" className="w-24 h-24 object-contain rounded-lg mb-8" />
            <h2 className={heading}>Built Matters: Our first market development platform</h2>
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">Energy. Carbon. Buildings. Infrastructure.</p>
            <a href="https://built-matters.com/" target="_blank" rel="noopener noreferrer" className={`${externalLink} mb-8`}>Explore Built Matters <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
            <div className={body}>
              <p>Built Matters is our first specialist market intelligence platform, focused on the challenges and opportunities facing organisations across the built environment.</p>
              <p>It brings together a dedicated website, application and structured market intelligence, creating a foundation for identifying organisations with relevant energy, carbon and estate requirements.</p>
              <p>For businesses delivering energy efficiency, decarbonisation, building services and related solutions, Built Matters offers the potential to develop a dedicated route to market.</p>
              <p>The platform exists today. We are developing its commercial application as an independently operated market development capability.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
            <div>
              <img src="/hvm_platform_logo.png" alt="HVM logo" width={96} height={96} loading="lazy" className="w-24 h-24 object-contain rounded-lg mb-8" />
              <h2 className={heading}>Powered by Henry</h2>
            </div>
            <div className={body}>
              <p className="text-xl md:text-2xl font-medium text-white">A market development platform needs more than a database. It needs an operating intelligence.</p>
              <p>That's where HVM comes in.</p>
              <a href="https://h-v-m.net/" target="_blank" rel="noopener noreferrer" className={externalLink}>Meet Henry at HVM <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
              <p>Henry is our AI-powered marketing and commercial decision engine.</p>
              <p>HVM brings together market research, prospect identification, content, personalised outreach, website engagement and ongoing optimisation.</p>
              <p>Rather than operating as disconnected tools or individual campaigns, these capabilities work together to develop commercial relationships and respond to emerging opportunities.</p>
              <p>The result is a market development platform with an ongoing intelligence and execution capability behind it.</p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className={heading}>Two parts. One commercial capability.</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl text-white mb-4"><span className="text-primary">1.</span> Acquire the asset</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">A dedicated market-facing website, specialist application and intelligence database configured for your commercial objectives.</p>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl text-white mb-4"><span className="text-primary">2.</span> Operate the opportunity</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">Subscribe to HVM for ongoing research, engagement, demand generation and commercial optimisation, with optional managed services.</p>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground leading-relaxed">The reusable platform technology remains with Vamberic Studio unless a separate IP acquisition is agreed. The scope of client ownership, exclusivity and data rights is defined commercially.</p>
          </div>
        </section>

        <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <h2 className={heading}>Built for businesses with ambitious commercial objectives</h2>
            <p className="text-lg text-muted-foreground mb-8">Our model is particularly relevant to organisations that:</p>
            <ul className="space-y-5">
              {audiences.map((audience) => (
                <li key={audience} className="flex gap-4 text-lg text-muted-foreground leading-relaxed"><Check aria-hidden="true" className="w-5 h-5 text-primary shrink-0 mt-1" /><span>{audience}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className={heading}>A different way to create demand</h2>
            <div className={body}>
              <p>We believe demand generation should be more than a collection of campaigns.</p>
              <p>It should be an enduring commercial capability, built around understanding a market, identifying its needs and developing meaningful relationships with potential customers.</p>
              <p>That's what we're building.</p>
            </div>
            <div className="mt-12 border-t border-primary/30 pt-10">
              <p className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">Explore what a dedicated market development platform could do for your business.</p>
              <p className="text-lg text-muted-foreground mb-8">Contact Vamberic Studio to discuss available platforms and potential opportunities.</p>
              <a href="mailto:info@vamberic.com?subject=Market%20Development%20Platforms" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/25 transition-shadow">Contact Vamberic Studio <ArrowRight className="w-5 h-5" aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
