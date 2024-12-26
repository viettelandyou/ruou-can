/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  // distDir:'dist',
  assetPrefix: "/ruou-can/", // Đường dẫn chính xác tới tài nguyên tĩnh
  basePath: "/ruou-can",
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
