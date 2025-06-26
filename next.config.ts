import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Enable CSS-in-JS support for styled-components
    esmExternals: true,
  },
};

export default nextConfig;
