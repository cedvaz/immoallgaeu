/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable experimental features for better SEO
  experimental: {
    optimizeCss: true,
  },
  // Generate sitemap automatically
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig
