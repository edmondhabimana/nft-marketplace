/** @type {import('next').NextConfig} */
const dedicatedEndPoint = 'https://edmond.infura-ipfs.io';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [dedicatedEndPoint, 'edmond.infura-ipfs.io'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
module.exports = nextConfig;
