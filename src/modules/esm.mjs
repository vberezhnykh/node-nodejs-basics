import { release, version } from "node:os";
import { readFile } from "fs/promises";
import * as url from "url";
import * as path from "node:path";
import { createServer } from "node:http";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

const random = Math.random();

const unknownObject = JSON.parse(
  await readFile(`${__dirname}/files/${random > 0.5 ? "a.json" : "b.json"}`, {
    encoding: "utf-8",
  })
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
