import { createReadStream, createWriteStream } from "fs";
import * as url from "url";
import { createUnzip } from "zlib";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const source = createReadStream(`${__dirname}/files/archive.gz`);
  const destination = createWriteStream(
    `${__dirname}/files/fileToCompress.txt`
  );
  const unzip = createUnzip();
  source.pipe(unzip).pipe(destination);
};

await decompress();
