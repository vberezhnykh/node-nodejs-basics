import { existsSync } from "node:fs";
import * as url from "url";
import * as fs from "node:fs/promises";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  const pathToFolder = `${__dirname}/files`;
  const pathToCopyFolder = `${__dirname}/files_copy`;
  const isFoldersExisted = existsSync(pathToFolder && pathToCopyFolder);
  if (isFoldersExisted) {
    fs.cp(pathToFolder, pathToCopyFolder, { recursive: true });
  } else throw new Error("FS operation failed");
};

await copy();
