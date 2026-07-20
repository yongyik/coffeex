import fs from "fs";
import os from "os";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");
const outputDir = process.env.IMAGE_OUTPUT_DIR
  ? path.resolve(process.env.IMAGE_OUTPUT_DIR)
  : path.join(os.tmpdir(), "coffeex-images-optimized");
const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const quality = Math.min(95, Math.max(60, Number(process.env.IMAGE_QUALITY) || 82));
const maxWidth = Math.min(
  3000,
  Math.max(640, Number(process.env.IMAGE_MAX_WIDTH) || 1600),
);

if (
  outputDir === inputDir ||
  outputDir.startsWith(`${inputDir}${path.sep}`)
) {
  throw new Error("IMAGE_OUTPUT_DIR must be outside public/images.");
}

function getAllImages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) return getAllImages(fullPath);
    return allowedExt.has(path.extname(entry.name).toLowerCase())
      ? [fullPath]
      : [];
  });
}

async function compressImage(filePath) {
  const relativePath = path.relative(inputDir, filePath);
  const outputPath = path.join(
    outputDir,
    relativePath.replace(/\.(jpg|jpeg|png|webp)$/i, ".webp"),
  );

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  await sharp(filePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  console.log(`Optimized: ${relativePath}`);
}

async function main() {
  const images = getAllImages(inputDir);
  fs.mkdirSync(outputDir, { recursive: true });

  for (const image of images) {
    await compressImage(image);
  }

  console.log(`Done. ${images.length} files written to ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
