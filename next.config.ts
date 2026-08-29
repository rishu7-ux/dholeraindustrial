import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    localPatterns: [
      // Legacy Payload media is served through this same-origin proxy.
      // The path query is intentionally dynamic and is validated by the route.
      { pathname: "/api/blog-media" },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
