import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable hot reload and fast refresh
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 100,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next'],
      }
    }
    return config
  },
  // TypeScript configuration
  typescript: {
    // Enable type checking in development
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  // Enable experimental features for better DX
  experimental: {
    
    // appDir: true,
    // serverActions: true,
    // reactRefresh: true,
  },
  // Add additional configurations
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  poweredByHeader: false,
}

export default nextConfig