import { existsSync } from "node:fs";
import * as url from "url";
import * as fs from "node:fs/promises";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  const pathToFolder = `${__dirname}/files`;
  if (!existsSync(pathToFolder)) throw new Error("FS operation failed");
  const files = await fs.readdir(pathToFolder);
  for (const file of files) {
    console.log(file);
  }
};

await list();
