import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // if you also use Unsplash images
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // ✅ this one is needed for your current image source
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // ✅ this one is needed for your current image source
      }
    ]
  }
};

export default nextConfig;
