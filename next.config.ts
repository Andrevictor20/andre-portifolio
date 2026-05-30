import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    DATABASE_URL: process.env.DATABASE_URL || "file:./dev.db",
  }
};

export default nextConfig;
