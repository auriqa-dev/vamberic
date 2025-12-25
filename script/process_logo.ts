
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const LION_PATH = 'attached_assets/logo_1766646541063.png';
const DRAGON_PATH = 'attached_assets/logo_v2_1766646547445.png';
const OUTPUT_PATH = 'client/public/logo_combined.png';

async function processImages() {
  try {
    // Ensure output directory exists
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 1. Get dimensions of the Dragon logo (source of text)
    const dragonMetadata = await sharp(DRAGON_PATH).metadata();
    const width = dragonMetadata.width!;
    const height = dragonMetadata.height!;

    // Estimate text area - bottom 35% of the image seems safe for the text "VAMBERIC GROUP" based on standard logo layouts
    // and the visual provided.
    const textHeight = Math.floor(height * 0.35);
    const textTop = height - textHeight;

    // Extract text part
    const textBuffer = await sharp(DRAGON_PATH)
      .extract({ left: 0, top: textTop, width: width, height: textHeight })
      .toBuffer();

    // 2. Load Lion logo
    const lionMetadata = await sharp(LION_PATH).metadata();
    const lionWidth = lionMetadata.width!;
    const lionHeight = lionMetadata.height!;

    // Resize lion to match the width of the text block for consistency, maintaining aspect ratio
    // We'll leave a little padding so it doesn't look too wide compared to text
    const targetLionWidth = width; 
    const resizedLionBuffer = await sharp(LION_PATH)
      .resize(targetLionWidth)
      .toBuffer();
    
    // Get new lion dimensions
    const resizedLionMeta = await sharp(resizedLionBuffer).metadata();
    const newLionHeight = resizedLionMeta.height!;

    // 3. Create canvas for combined image
    const gap = 20; // Space between icon and text
    const totalHeight = newLionHeight + gap + textHeight;
    
    await sharp({
      create: {
        width: targetLionWidth,
        height: totalHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([
      { input: resizedLionBuffer, top: 0, left: 0 },
      { input: textBuffer, top: newLionHeight + gap, left: 0 }
    ])
    .toFile(OUTPUT_PATH);

    console.log(`Success! Combined logo saved to ${OUTPUT_PATH}`);

  } catch (error) {
    console.error('Error processing images:', error);
    process.exit(1);
  }
}

processImages();
