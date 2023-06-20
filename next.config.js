/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
    images: {
        domains: ['res.cloudinary.com']
      },
   
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true }
      return config
    },
}

module.exports = nextConfig
