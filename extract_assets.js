#!/usr/bin/env node
/**
 * Extract base64 images from the bundled HTML manifest
 * and save them as separate files in dira-improved/assets/images/
 */
const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, 'PT Dira Baraka Mulia.html');
const outputDir = path.join(__dirname, 'dira-improved', 'assets', 'images');

// Create output directory
fs.mkdirSync(outputDir, { recursive: true });

const html = fs.readFileSync(htmlFile, 'utf8');

// Extract the manifest JSON from the script tag
const manifestMatch = html.match(/<script type="__bundler\/manifest">\s*([\s\S]*?)\s*<\/script>/);
if (!manifestMatch) {
  console.error('Could not find bundler manifest');
  process.exit(1);
}

const manifest = JSON.parse(manifestMatch[1]);
const uuids = Object.keys(manifest);
console.log(`Found ${uuids.length} assets in manifest`);

let imageCount = 0;
const assetMap = {};

for (const uuid of uuids) {
  const entry = manifest[uuid];
  const mime = entry.mime;
  
  // Determine extension from mime type
  let ext = 'bin';
  if (mime === 'image/jpeg') ext = 'jpg';
  else if (mime === 'image/png') ext = 'png';
  else if (mime === 'image/svg+xml') ext = 'svg';
  else if (mime === 'image/gif') ext = 'gif';
  else if (mime === 'image/webp') ext = 'webp';
  else if (mime === 'text/css') ext = 'css';
  else if (mime === 'application/javascript' || mime === 'text/javascript') ext = 'js';
  else if (mime === 'text/html') ext = 'html';
  else if (mime === 'font/woff2') ext = 'woff2';
  else if (mime === 'font/woff') ext = 'woff';
  else if (mime === 'font/ttf') ext = 'ttf';
  
  const filename = `asset_${String(imageCount).padStart(3, '0')}.${ext}`;
  const outputPath = path.join(outputDir, filename);
  
  if (!entry.compressed) {
    // Direct base64 decode
    const buffer = Buffer.from(entry.data, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`[${imageCount}] ${uuid} -> ${filename} (${mime}, ${(buffer.length / 1024).toFixed(1)}KB)`);
  } else {
    // Compressed - save raw base64 for now, will need browser decompression
    const buffer = Buffer.from(entry.data, 'base64');
    fs.writeFileSync(outputPath + '.gz', buffer);
    console.log(`[${imageCount}] ${uuid} -> ${filename}.gz (${mime}, compressed, ${(buffer.length / 1024).toFixed(1)}KB)`);
  }
  
  assetMap[uuid] = { filename, mime, compressed: entry.compressed || false };
  imageCount++;
}

// Save asset map for reference
fs.writeFileSync(
  path.join(outputDir, 'asset_map.json'),
  JSON.stringify(assetMap, null, 2)
);

console.log(`\nDone! Extracted ${imageCount} assets to ${outputDir}`);
console.log('Asset map saved to asset_map.json');
