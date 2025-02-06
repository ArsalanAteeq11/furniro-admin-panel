/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com", // Add Flaticon hostname here
      },
    ],
  },
};

export default nextConfig;
