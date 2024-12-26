/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  //output: "export",
  // distDir:'dist',
  basePath: isProd ? '/viettelandyou' : '',
  assetPrefix: isProd ? '/viettelandyou' : '',
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
