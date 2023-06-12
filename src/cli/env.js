import { env } from "node:process";

const parseEnv = () => {
  for (const property in env) {
    if (property.startsWith("RSS_")) {
      console.log(`${property}=${env[property]}`);
    }
  }
};

parseEnv();
