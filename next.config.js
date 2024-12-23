/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  // distDir:'dist',
  // assetPrefix: '/tranh-theu/',  // Đường dẫn chính xác tới tài nguyên tĩnh
  // basePath: '/tranh-theu',
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
