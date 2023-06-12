import { existsSync } from "node:fs";
import * as url from "url";
import * as fs from "node:fs/promises";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const oldPath = `${__dirname}/files/wrongFilename.txt`;
  const newFileName = "properFilename.md";
  const newPath = `${__dirname}/files/${newFileName}`;
  if (existsSync(oldPath) && !existsSync(newPath)) {
    fs.rename(oldPath, newPath);
  } else throw new Error("FS operation failed");
};

await rename();
