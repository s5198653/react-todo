import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/react-todo',
  assetPrefix: '/react-todo/',
  trailingSlash: true,
};

export default nextConfig;
