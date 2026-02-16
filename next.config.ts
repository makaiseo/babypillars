import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-babypillars",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
