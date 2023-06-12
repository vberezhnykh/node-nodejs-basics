import { existsSync } from "node:fs";
import * as url from "url";
import * as fs from "node:fs/promises";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const path = `${__dirname}/files/fileToRead.txt`;
  if (!existsSync(path)) throw new Error("FS operation failed");
  const content = await fs.readFile(path, { encoding: "utf-8" });
  console.log(content);
};

await read();
