/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseApi: 'https://6331e3cf3ea4956cfb694be6.mockapi.io',
  },
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['loremflickr.com'],
  },
};

module.exports = nextConfig;
