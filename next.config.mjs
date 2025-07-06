/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photo.znews.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'astatic.znews.vn',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
