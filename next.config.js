/** @type {import('next').NextConfig} */

const nextConfig = {
  //output: "export",
  // distDir:'dist',
  basePath: '/viettelandyou',
  assetPrefix: '/viettelandyou' ,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
