import * as url from "url";
import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
  const destination = createWriteStream(`${__dirname}/files/archive.gz`);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
