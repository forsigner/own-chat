const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@one-chat/shared"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
