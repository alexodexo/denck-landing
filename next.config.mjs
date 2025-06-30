/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['le-cdn.website-editor.net', 'images.unsplash.com', 'via.placeholder.com', 'margonline.com'],
    unoptimized: false,
  },
  // Cross-origin fix for development
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect root to index (removed automatic redirect)
      // Let users see the landing page first
    ]
  },
  async rewrites() {
    return [
      // Rewrite for cleaner URLs
      {
        source: '/transformation',
        destination: '/transformationskontinuum',
      },
      {
        source: '/coaching',
        destination: '/frankfurt-business-coach',
      },
    ]
  },
}

export default nextConfig