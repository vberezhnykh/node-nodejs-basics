import * as url from "url";
import { createReadStream } from "node:fs";
import { stdout } from "process";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const stream = createReadStream(`${__dirname}/files/fileToRead.txt`);
  stream.pipe(stdout);
};

await read();
