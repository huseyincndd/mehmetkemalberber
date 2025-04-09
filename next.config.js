/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // Turn off ESLint during build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 