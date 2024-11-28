/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["i.scdn.co"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
