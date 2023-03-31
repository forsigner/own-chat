const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@own-chat/shared"],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }
};
