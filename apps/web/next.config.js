// NOTE: Uncomment this when building with docker
// const path = require("path");

const withDocker = {
  // output: "standalone",
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, "../../"),
  // },
};

/** @type {import('next').NextConfig} */
module.exports = {
  ...withDocker,
  reactStrictMode: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
};
