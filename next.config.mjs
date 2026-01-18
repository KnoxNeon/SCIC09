/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'www.librariesni.org.uk',
      },
      {
        protocol: 'https',
        hostname: '0.academia-photos.com',
      },
      {
        protocol: 'https',
        hostname: 'img1.od-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'imgv2-2-f.scribdassets.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'bookowlsbd.com',
      },
    ],
  },
};

export default nextConfig;
