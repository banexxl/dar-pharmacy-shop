/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
          reactStrictMode: true,
          i18n,
          images: {
                    domains: ['i.ibb.co'],
          }
}

module.exports = nextConfig
