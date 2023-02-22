module.exports = {
          // https://www.i18next.com/overview/configuration-options#logging
          debug: process.env.NODE_ENV === 'development',
          i18n: {
                    defaultLocale: 'sr',
                    locales: ['en', 'sr'],
          },
          /** To avoid issues when deploying to some paas (vercel...) */
          localePath:
                    typeof window === 'undefined'
                              ? require('path').resolve('./public/i18n')
                              : '/i18n',

          reloadOnPrerender: process.env.NODE_ENV === 'development',
          react: { useSuspense: false }

          /**
           * @link https://github.com/i18next/next-i18next#6-advanced-configuration
           */
          // saveMissing: false,
          // strictMode: true,
          // serializeConfig: false,
          // react: { useSuspense: false }
}