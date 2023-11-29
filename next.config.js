/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],

        remotePatterns: [
          {
            protocol: 'https',
            hostname: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
