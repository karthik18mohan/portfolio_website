import { readdirSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png'];
const projectsDir = join(__dirname, '..', 'public', 'assets', 'projects');

function findImagePath(projectId, imageName) {
  for (const ext of IMAGE_EXTENSIONS) {
    const path = `/assets/projects/${projectId}/${imageName}.${ext}`;
    const publicPath = join(__dirname, '..', 'public', path);
    if (existsSync(publicPath)) {
      return path;
    }
  }
  return null;
}

function getProjectScreenshots(projectId) {
  const screenshots = [];
  const projectDir = join(projectsDir, String(projectId));

  if (!existsSync(projectDir)) {
    return screenshots;
  }

  const files = readdirSync(projectDir);
  const imageFiles = files.filter(file => {
    const ext = file.split('.').pop()?.toLowerCase();
    return ext && IMAGE_EXTENSIONS.includes(ext);
  });

  let index = 1;
  while (true) {
    const found = imageFiles.find(file => {
      const name = file.split('.')[0];
      return name === String(index);
    });

    if (found) {
      screenshots.push(`/assets/projects/${projectId}/${found}`);
      index++;
    } else {
      break;
    }
  }

  return screenshots;
}

const manifest = {};

if (existsSync(projectsDir)) {
  const projectFolders = readdirSync(projectsDir);

  for (const folder of projectFolders) {
    const projectId = parseInt(folder);
    if (!isNaN(projectId)) {
      const thumbnail = findImagePath(projectId, 'thumbnail') || '/assets/projects/placeholder.jpg';
      const screenshots = getProjectScreenshots(projectId);

      manifest[projectId] = {
        thumbnail,
        screenshots,
      };
    }
  }
}

const outputPath = join(__dirname, '..', 'content', 'images-manifest.json');
writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log('Image manifest generated successfully!');
