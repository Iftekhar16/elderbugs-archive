/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'placehold.co'],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
