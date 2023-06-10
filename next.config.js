/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            // Testing purpose
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'media.discordapp.net',
            port: '',
          }
        ],
      },
}

module.exports = nextConfig
