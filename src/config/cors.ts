import { CorsOptions } from "cors";

const corsConfig: CorsOptions = {
  origin: [
    /^http:\/\/([a-z0-9]+\.)?localhost(:\d+)?$/,
  ]
};

export { corsConfig };