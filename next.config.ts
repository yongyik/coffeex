import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: "/", destination: "/zh", permanent: false },
      { source: "/menu", destination: "/zh/menu", permanent: true },
      { source: "/about", destination: "/zh/about", permanent: true },
      { source: "/contact", destination: "/zh/contact", permanent: true },
      { source: "/privacy", destination: "/zh/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
