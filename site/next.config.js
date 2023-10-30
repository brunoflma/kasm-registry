/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Personal Workspace',
    description: 'Kasm Personal Workspace',
    icon: 'https://brunoflma.github.io/kasm-registry/1.0/icon.png',
    listUrl: 'https://brunoflma.github.io/kasm-registry/',
    contactUrl: 'https://brunoflma.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
