/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.seasidestartupsummit.com",
        port: "",
        pathname: "/assets/media/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
