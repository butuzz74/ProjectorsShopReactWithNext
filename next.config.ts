import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/dku5gkauv/projectors/**',
      },
    ],
  },
};

export default nextConfig;
