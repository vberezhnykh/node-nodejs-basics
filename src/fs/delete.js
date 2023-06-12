import { existsSync } from "node:fs";
import * as url from "url";
import * as fs from "node:fs/promises";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const pathToFile = `${__dirname}/files/fileToRemove.txt`;
  if (existsSync(pathToFile)) {
    fs.rm(pathToFile);
  } else throw new Error("FS operation failed");
};

await remove();
