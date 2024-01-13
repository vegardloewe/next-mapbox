/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: true,
    outputStandalone: true,
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
