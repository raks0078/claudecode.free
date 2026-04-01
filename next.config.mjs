/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    // Externalize node-specific modules during SSR
    if (isServer) {
      config.externals = [
        ...config.externals,
        'ws',
        'bufferutil',
        'utf-8-validate',
      ]
    }
    return config
  },
  turbopack: {},
  serverExternalPackages: [
    '@solana/web3.js',
    '@solana/connector',
    '@solana/kit',
    '@solana/rpc-subscriptions-channel-websocket',
    '@solana/rpc-subscriptions',
  ],
}

export default nextConfig
