const i18next = require('i18next')

i18next.init({
          // Your i18next configuration options
          //ReduxLogger: { level: 'warn' },
          debug: false,
});

module.exports = {
          // https://www.i18next.com/overview/configuration-options#logging
          debug: process.env.NODE_ENV === 'development',
          i18n: {
                    defaultLocale: 'sr-RS',
                    // locales: ['sr-RS', 'en-US'],
          },
          fallbackLng: {
                    default: ['sr-RS']
          },
          /** To avoid issues when deploying to some paas (vercel...) */
          localePath: require('path').resolve('./public/locales'),
          reloadOnPrerender: process.env.NODE_ENV === 'production',
          react: { useSuspense: true },
          /**
           * @link https://github.com/i18next/next-i18next#6-advanced-configuration
           */
          // saveMissing: false,
          // strictMode: true,
          // serializeConfig: false,
}