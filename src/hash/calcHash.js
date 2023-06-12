import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const hash = createHash("sha256");
  const input = createReadStream(
    `${__dirname}/files/fileToCalculateHashFor.txt`
  );
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
