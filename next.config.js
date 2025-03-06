/**
 * @type {import('next').NextConfig}
 */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
    optimizeCss: true
  },
  experimental: {
    optimizePackageImports: [
      '@headlessui/react',
      'lucide-react',
      'react-day-picker',
      'swiper',
      'react-device-detect',
    ],
  },
  images: {
    remotePatterns: [

      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },

    ],
  },
};

module.exports = withNextIntl(nextConfig);
