import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
};

module.exports = nextConfig;
