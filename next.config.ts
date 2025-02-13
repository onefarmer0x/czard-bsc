import type { NextConfig } from "next";

const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next/dev' : '.next/build',
};

export default nextConfig;
