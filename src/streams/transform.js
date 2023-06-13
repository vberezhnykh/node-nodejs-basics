import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const reverse = new Transform({
    transform(data, encoding, callback) {
      callback(null, data.toString().split("").reverse().join(""));
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

await transform();
