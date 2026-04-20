import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.globalstock.fr",
      },
      {
        protocol: "https",
        hostname: "primary.jwwb.nl",
      },
    ],
  },
};

export default nextConfig;
