/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig 