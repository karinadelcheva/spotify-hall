/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["i.scdn.co"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-cdn-ak.spotifycdn.com',
        pathname: '/**', // This allows all paths under the domain
      },
    ],
  },
};

export default nextConfig;
