/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: production ? '/fettle' : '',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/fettle',
}

module.exports = nextConfig
