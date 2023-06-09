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
        ],
      },
}

module.exports = nextConfig
