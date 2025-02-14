/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
