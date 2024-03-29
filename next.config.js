// /** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
//   assetPrefix: isProd ? '/portfolio_nextjs/' : '',
//   basePath: isProd ? '/portfolio_nextjs' : '',
  images: {
    loader: 'custom',
//     path: isProd ? '/portfolio_nextjs/' : ''
  }
}

module.exports = nextConfig
