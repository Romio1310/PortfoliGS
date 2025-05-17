/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports for Next.js Image component
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'www.google.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
  // Add CORS headers for proper API access
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, sanity-auth' },
        ],
      },
    ];
  },
  // Set strict mode to false to avoid double-rendering issues with React hooks
  reactStrictMode: false,
  // Fix for ESM modules in Sanity
  transpilePackages: ['@sanity', 'sanity', '@sanity/code-input', '@sanity/table', 'date-fns'],
  // Fix for module resolution and ESM compatibility issues
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['@sanity/ui', 'framer-motion'],
  },
  // Handle framer-motion properly in webpack
  webpack: (config, { isServer }) => {
    // Only modify client-side configuration
    if (!isServer) {
      // Don't use the motion shim on server or client for now
      // We'll handle compatibility in each component
    }
    
    return config;
  },
}

module.exports = nextConfig
