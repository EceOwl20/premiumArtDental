import { defineRouting } from 'next-intl/routing';

export const config = {
  locales: ['tr', 'en', 'de', 'ru'],
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always',
  pathnames : {
  '/': {
    tr: '/',
    en: '/',
    de: '/',
    ru: '/',
  },

   '/blog/dis-implant-ve-dis-koprusu-sizin-icin-hangi-tedavi-daha-uygun': {
    tr: '/blog/dis-implant-ve-dis-koprusu-sizin-icin-hangi-tedavi-daha-uygun',
    en: '/blog/dental-implants-vs-dental-bridges-which-treatment-is-right-for-you',
    de: '/blog/zahnimplantate-vs-zahnbrücken-welche-behandlung-ist-die-richtige-für-sie',
    ru: '/blog/zahnimplantate-vs-zahnbrücken-welche-behandlung-ist-die-richtige-für-sie',
  }

}

};

export const routing = defineRouting(config);