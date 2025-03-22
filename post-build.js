import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure dist/public directory exists
const publicDir = path.resolve(__dirname, 'dist', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created dist/public directory');
}

// Source directory (client build output)
const sourceDir = path.resolve(__dirname, 'client-dist');

// Copy function
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all items in source directory
  const items = fs.readdirSync(source);

  // Copy each item
  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);

    // Check if it's a file or directory
    const stat = fs.statSync(sourcePath);
    if (stat.isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied file: ${sourcePath} -> ${destPath}`);
    } else if (stat.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    }
  }
}

// Check if client-dist exists
if (!fs.existsSync(sourceDir)) {
  console.error('Error: client-dist directory not found. Did the client build succeed?');
  process.exit(1);
}

// Copy files from client-dist to dist/public
console.log(`Copying from ${sourceDir} to ${publicDir}`);
copyDirectory(sourceDir, publicDir);
console.log('Successfully copied client build files to dist/public');
