/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require("path");

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc("src/assets"),
      },
    },
    output: {
      filename: "[name].[hash8].js",
      chunkFilename: "[name].[hash8].js",
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
  pages: {
    app: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
      excludeChunks: ["silent-renew-oidc"],
    },
    silentrenewoidc: {
      entry: "src/silent-renew-oidc.ts",
      template: "public/silent-renew-oidc.html",
      filename: "silent-renew-oidc.html",
      excludeChunks: ["app"],
    },
  },
};
