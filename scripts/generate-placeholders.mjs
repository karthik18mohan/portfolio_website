import { writeFileSync } from 'fs';

function createMinimalJPEG(width, height, r, g, b) {
  const w = Math.min(width, 255);
  const h = Math.min(height, 255);

  const header = Buffer.from([
    0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10,
    0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
    0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00,
  ]);

  const quantTable = Buffer.alloc(69);
  quantTable[0] = 0xFF; quantTable[1] = 0xDB;
  quantTable[2] = 0x00; quantTable[3] = 0x43;
  quantTable[4] = 0x00;
  for (let i = 5; i < 69; i++) quantTable[i] = 0x01;

  const sof = Buffer.from([
    0xFF, 0xC0, 0x00, 0x0B, 0x08,
    0x00, h, 0x00, w,
    0x01, 0x01, 0x11, 0x00,
  ]);

  const dht = Buffer.from([
    0xFF, 0xC4, 0x00, 0x1F, 0x00,
    0x00, 0x01, 0x05, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B,
  ]);

  const sos = Buffer.from([
    0xFF, 0xDA, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3F, 0x00,
  ]);

  const Y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  const yVal = Math.max(0, Math.min(255, Y));

  const scanData = Buffer.alloc(Math.max(w * h + 10, 20), yVal);
  const eoi = Buffer.from([0xFF, 0xD9]);

  return Buffer.concat([header, quantTable, sof, dht, sos, scanData, eoi]);
}

function createSVGPlaceholder(width, height, r, g, b, text) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <rect width="100%" height="100%" fill="rgb(${r},${g},${b})"/>
  <text x="50%" y="50%" font-family="sans-serif" font-size="16" fill="white" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
  return Buffer.from(svg);
}

const placeholders = [
  { path: 'public/assets/profile/profile.jpg', w: 400, h: 400, r: 30, g: 41, b: 59, text: 'Profile Photo' },
  { path: 'public/assets/backgrounds/hero.jpg', w: 200, h: 120, r: 10, g: 15, b: 26, text: 'Hero Background' },
  { path: 'public/assets/projects/zenlit-location-social/thumbnail.jpg', w: 200, h: 140, r: 20, g: 60, b: 80, text: 'Zenlit' },
  { path: 'public/assets/projects/zenlit-location-social/screen1.jpg', w: 200, h: 120, r: 20, g: 65, b: 85, text: 'Screen 1' },
  { path: 'public/assets/projects/zenlit-location-social/screen2.jpg', w: 200, h: 120, r: 25, g: 70, b: 90, text: 'Screen 2' },
  { path: 'public/assets/projects/brake-pad-wear-ml/thumbnail.jpg', w: 200, h: 140, r: 60, g: 30, b: 30, text: 'Brake ML' },
  { path: 'public/assets/projects/brake-pad-wear-ml/screen1.jpg', w: 200, h: 120, r: 65, g: 35, b: 35, text: 'Screen 1' },
  { path: 'public/assets/projects/brake-pad-wear-ml/screen2.jpg', w: 200, h: 120, r: 70, g: 40, b: 40, text: 'Screen 2' },
  { path: 'public/assets/projects/virtual-sensor-maneuver-detection/thumbnail.jpg', w: 200, h: 140, r: 20, g: 60, b: 50, text: 'Virtual Sensor' },
  { path: 'public/assets/projects/virtual-sensor-maneuver-detection/screen1.jpg', w: 200, h: 120, r: 25, g: 65, b: 55, text: 'Screen 1' },
  { path: 'public/assets/projects/virtual-sensor-maneuver-detection/screen2.jpg', w: 200, h: 120, r: 30, g: 70, b: 60, text: 'Screen 2' },
  { path: 'public/assets/projects/rainflow-fatigue-analytics/thumbnail.jpg', w: 200, h: 140, r: 50, g: 40, b: 60, text: 'Rainflow' },
  { path: 'public/assets/projects/rainflow-fatigue-analytics/screen1.jpg', w: 200, h: 120, r: 55, g: 45, b: 65, text: 'Screen 1' },
  { path: 'public/assets/projects/rainflow-fatigue-analytics/screen2.jpg', w: 200, h: 120, r: 60, g: 50, b: 70, text: 'Screen 2' },
];

for (const p of placeholders) {
  const svg = createSVGPlaceholder(p.w, p.h, p.r, p.g, p.b, p.text);
  const jpgPath = p.path;
  writeFileSync(jpgPath, svg);
  console.log(`Created: ${jpgPath}`);
}

const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 44 >>
stream
BT /F1 24 Tf 100 700 Td (Resume Placeholder) Tj ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000266 00000 n
0000000360 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
441
%%EOF`;

writeFileSync('public/resume.pdf', pdfContent);
console.log('Created: public/resume.pdf');
