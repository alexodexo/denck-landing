/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['le-cdn.website-editor.net', 'images.unsplash.com', 'via.placeholder.com', 'margonline.com'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Kompression für bessere Performance
  compress: true,
  
  // SEO-freundliche Trailing Slashes
  trailingSlash: false,
  
  // Security Headers für bessere SEO-Rankings
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ]
  },
  
  // SEO-freundliche Redirects
  async redirects() {
    return [
      // Redirect www to non-www für konsistente URLs
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.denck.com',
          },
        ],
        destination: 'https://denck.com/:path*',
        permanent: true,
      },
      // Alte URLs umleiten falls vorhanden
      {
        source: '/alex-denck',
        destination: '/kontakt',
        permanent: true,
      },
      {
        source: '/ki-beratung',
        destination: '/leistungen',
        permanent: true,
      },
    ]
  },
  
  // SEO-freundliche Rewrites
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },

  // Optimierte Build-Konfiguration
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // PWA-ähnliche Features für bessere Nutzererfahrung
  poweredByHeader: false,
}

export default nextConfig