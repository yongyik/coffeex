import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images";
const outputDir = "public/images-optimized";

const allowedExt = [".jpg", ".jpeg", ".png"];

function getAllImages(dir) {
  const files = fs.readdirSync(dir);

  return files.flatMap((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      return getAllImages(fullPath);
    }

    const ext = path.extname(file).toLowerCase();

    if (allowedExt.includes(ext)) {
      return [fullPath];
    }

    return [];
  });
}

async function compressImage(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const outputPath = path.join(
    outputDir,
    relativePath.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  await sharp(filePath)
    .resize({
      width: 1600,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
    })
    .toFile(outputPath);

  console.log(`Compressed: ${filePath} -> ${outputPath}`);
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const images = getAllImages(inputDir);

  for (const image of images) {
    await compressImage(image);
  }

  console.log("Done!");
}

main();