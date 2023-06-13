import * as url from "url";
import { createWriteStream } from "node:fs";
import { stdin } from "process";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const stream = createWriteStream(`${__dirname}/files/fileToWrite.txt`);
  stdin.on("data", (data) => {
    stream.write(data);
  });
};

await write();
