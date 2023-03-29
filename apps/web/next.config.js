const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@owned-chat/shared"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
