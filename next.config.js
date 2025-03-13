/** @type {import('next').NextConfig} */

//const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
     reactStrictMode: true,
     //i18n,
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'i.ibb.co'
               },
               {
                    protocol: 'https',
                    hostname: 'lh3.googleusercontent.com'
               },
               {
                    protocol: 'https',
                    hostname: 'utfs.io'
               },
               {
                    protocol: 'https',
                    hostname: 'dar-pharmacy.s3.eu-central-1.amazonaws.com'
               }
          ],
     }
}

module.exports = nextConfig
