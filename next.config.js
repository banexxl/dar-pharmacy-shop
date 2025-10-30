/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
     reactStrictMode: true,
     images: {
          remotePatterns: [
               { protocol: 'https', hostname: 'i.ibb.co' },
               { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
               { protocol: 'https', hostname: 'utfs.io' },
               { protocol: 'https', hostname: 'dar-pharmacy.s3.eu-central-1.amazonaws.com' },
          ],
     },
};

module.exports = nextConfig;
