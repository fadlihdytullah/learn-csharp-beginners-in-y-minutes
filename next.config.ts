import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/ask": ["./app/*/*.{tsx,cs,txt}"],
  },
};

export default nextConfig;
