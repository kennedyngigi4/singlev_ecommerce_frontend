import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },

      // production
      {
        protocol: 'https',
        hostname: 'api.quza.co.ke',
        pathname: '/media/**',
      },
    ]
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },


  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.quza.co.ke/:path*",
      },
    ];
  },

};

export default nextConfig;
