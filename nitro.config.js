import { defineNitroConfig } from "nitropack/config";
import { withIslands } from "nitro-preact-islands";

export default withIslands(
  defineNitroConfig({
    publicAssets: [
      {
        dir: "public",
        baseURL: "/public",
      },
    ],
  })
);
