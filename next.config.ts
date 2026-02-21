import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/about/",
        destination: "/about-babypillars/",
        statusCode: 301,
      },
      // Age-specific video pages → corresponding age guides (301 Moved Permanently)
      // Note: trailingSlash:true normalises no-slash URLs to slash URLs before these rules run
      { source: "/0-3-dvideo/", destination: "/0-3-months-baby/", statusCode: 301 },
      { source: "/3-6-dvideo/", destination: "/3-6-months-baby/", statusCode: 301 },
      { source: "/6-9-dvideo/", destination: "/6-9-months-baby/", statusCode: 301 },
      { source: "/9-12-dvideo/", destination: "/9-12-months-baby/", statusCode: 301 },
      // YouTube free video pages → home (301 Moved Permanently)
      { source: "/yt-0-3-free-video/", destination: "/", statusCode: 301 },
      { source: "/yt-3-6-free-video/", destination: "/", statusCode: 301 },
      { source: "/yt-6-9-free-video/", destination: "/", statusCode: 301 },

      // Course sub-pages & product pages → pricing (301 Moved Permanently)
      { source: "/courses/:path*/", destination: "/pricing/", statusCode: 301 },
      { source: "/product/:path*/", destination: "/pricing/", statusCode: 301 },
      { source: "/home-22/", destination: "/", statusCode: 301 },

      // Quiz & courses → contextual destinations (301 Moved Permanently)
      { source: "/courses/", destination: "/how-it-works/", statusCode: 301 },
      { source: "/quiz-by-babypillars/", destination: "/", statusCode: 301 },

      // Social media redirect pages → home (301 Moved Permanently)
      { source: "/pinterest/", destination: "/", statusCode: 301 },
      { source: "/babypillars-facebook/", destination: "/", statusCode: 301 },
      { source: "/babypillars-instagram/", destination: "/", statusCode: 301 },
      { source: "/yt-fans/", destination: "/", statusCode: 301 },
      { source: "/babypillars-youtube-fans/", destination: "/", statusCode: 301 },
      { source: "/tiktok/", destination: "/", statusCode: 301 },

      // Quiz result pages → corresponding age guides (301 Moved Permanently)
      { source: "/qb03answers/", destination: "/0-3-months-baby/", statusCode: 301 },
      { source: "/qb36answers/", destination: "/3-6-months-baby/", statusCode: 301 },
      { source: "/qb69answers/", destination: "/6-9-months-baby/", statusCode: 301 },
      { source: "/qb912answers/", destination: "/9-12-months-baby/", statusCode: 301 },
      { source: "/qb1224answers/", destination: "/12-24-months-baby/", statusCode: 301 },
      { source: "/qg03answers/", destination: "/0-3-months-baby/", statusCode: 301 },
      { source: "/qg36answers/", destination: "/3-6-months-baby/", statusCode: 301 },
      { source: "/qg69answers/", destination: "/6-9-months-baby/", statusCode: 301 },
      { source: "/qg912answers/", destination: "/9-12-months-baby/", statusCode: 301 },
      { source: "/quiz-g1224a-babypillar-member/", destination: "/12-24-months-baby/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
