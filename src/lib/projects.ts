import fs from 'fs';
import path from 'path';

const EXTENSIONS = ['.webp', '.png', '.jpg', '.jpeg'];

export function getProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'projects', slug);
  const files = fs.readdirSync(dir).sort();
  return files
    .filter((f) => EXTENSIONS.includes(path.extname(f).toLowerCase()))
    .map((f) => `/projects/${slug}/${f}`);
}
