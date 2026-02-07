import { readdirSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const projectsDir = join(__dirname, '..', 'public', 'assets', 'projects');
const certificationsDir = join(__dirname, '..', 'public', 'assets', 'certifications');

function findNumberedImage(dir, assetPath, number) {
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir);
  for (const file of files) {
    const name = file.split('.')[0];
    const ext = file.split('.').pop()?.toLowerCase();
    if (name === String(number) && ext && IMAGE_EXTENSIONS.includes(ext)) {
      return `${assetPath}/${file}`;
    }
  }
  return null;
}

function getProjectImages(projectId) {
  const projectDir = join(projectsDir, String(projectId));
  if (!existsSync(projectDir)) return null;

  const assetPath = `/assets/projects/${projectId}`;
  const thumbnail = findNumberedImage(projectDir, assetPath, 0) || '/assets/projects/placeholder.jpg';

  const screenshots = [];
  let index = 1;
  while (true) {
    const img = findNumberedImage(projectDir, assetPath, index);
    if (img) {
      screenshots.push(img);
      index++;
    } else {
      break;
    }
  }

  return { thumbnail, screenshots };
}

function getCertificationImages() {
  const images = {};
  if (!existsSync(certificationsDir)) return images;

  const assetPath = '/assets/certifications';
  let index = 1;
  while (true) {
    const img = findNumberedImage(certificationsDir, assetPath, index);
    if (img) {
      images[index] = img;
      index++;
    } else {
      break;
    }
  }

  return images;
}

const manifest = { projects: {}, certifications: {} };

if (existsSync(projectsDir)) {
  const projectFolders = readdirSync(projectsDir);
  for (const folder of projectFolders) {
    const projectId = parseInt(folder);
    if (!isNaN(projectId)) {
      const images = getProjectImages(projectId);
      if (images) {
        manifest.projects[projectId] = images;
      }
    }
  }
}

manifest.certifications = getCertificationImages();

const outputPath = join(__dirname, '..', 'content', 'images-manifest.json');
writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log('Image manifest generated successfully!');
