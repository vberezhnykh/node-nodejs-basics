import { existsSync } from "node:fs";
import * as fs from "node:fs/promises";
import * as url from "url";
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  try {
    const pathToFile = `${__dirname}/files/fresh.txt`;
    const isFileExisted = existsSync(pathToFile);
    if (isFileExisted) throw new Error("FS operation failed");
    else fs.writeFile(pathToFile, "I am fresh and young");
  } catch (error) {
    console.error(error);
  }
};

await create();
