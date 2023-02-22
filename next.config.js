/** @type {import('next').NextConfig} */
const nextConfig = {
          reactStrictMode: true,
          i18n: {
                    locales: ['sr-RS', 'en-US'],
                    defaultLocale: 'sr-RS',
                    domains: [
                              {
                                        domain: 'apoteka-dar.rs',
                                        defaultLocale: 'sr-RS'
                              },
                    ]
          },
}

module.exports = nextConfig
