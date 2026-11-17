import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Ship the SQLite seed database and CMS media assets inside every
  // serverless API function. On read-only hosts (e.g. Vercel) src/lib/db.ts
  // copies the seed database to a writable /tmp location per instance.
  // Without this, the files exist in the repo but never reach the deployed
  // function bundle and every database route returns 500.
  outputFileTracingIncludes: {
    "/api/**": ["./db/custom.db", "./db/media/**"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
