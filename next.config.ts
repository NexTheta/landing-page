import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint isn't installed yet. Adding it with pnpm re-resolves every
    // "latest" dependency in package.json (expo, react-native, three, ...),
    // so pin those versions first, then install eslint and remove this.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
