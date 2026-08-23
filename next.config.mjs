/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      // Legacy slug: ConstructFi RevenueOS was previously at /marketplace/revenueos.
      // The canonical URL is now /marketplace/constructos. Keep the old link
      // functional with a permanent redirect so existing shared links continue to resolve.
      {
        source: "/marketplace/revenueos",
        destination: "/marketplace/constructos",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

export default nextConfig;
