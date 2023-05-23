const i18next = require('i18next')

i18next.init({
          // Your i18next configuration options
          ReduxLogger: { level: 'warn' },
});

module.exports = {
          // https://www.i18next.com/overview/configuration-options#logging
          debug: process.env.NODE_ENV === 'development',
          i18n: {
                    defaultLocale: 'sr-RS',
                    locales: ['en-US', 'sr-RS'],
          },
          /** To avoid issues when deploying to some paas (vercel...) */
          localePath:
                    typeof window === 'undefined'
                              ? require('path').resolve('./public/locales')
                              : '/locales',

          reloadOnPrerender: process.env.NODE_ENV === 'production',
          react: { useSuspense: true },
          /**
           * @link https://github.com/i18next/next-i18next#6-advanced-configuration
           */
          // saveMissing: false,
          // strictMode: true,
          // serializeConfig: false,
}