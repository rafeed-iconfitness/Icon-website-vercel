/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Keep commented unless needed
    // ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Enable image optimization for production
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
}

export default nextConfig