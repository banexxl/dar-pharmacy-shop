/** @type {import('next').NextConfig} */

//const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
     reactStrictMode: true,
     //i18n,
     images: {
          domains: ['i.ibb.co', 'lh3.googleusercontent.com', 'utfs.io', 'dar-pharmacy.s3.eu-central-1.amazonaws.com'],
     }
}

module.exports = nextConfig
