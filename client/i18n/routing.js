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

  '/kurumsal': {
    tr: '/kurumsal',
    en: '/corporate',
    de: '/unternehmen',
    ru: '/o-компании',
  },

    '/tedaviler': {
    tr: '/tedaviler',
    en: '/treatments',
    de: '/behandlungen',
    ru: '/Лечения',
  },

    '/ekibimiz': {
    tr: '/ekibimiz',
    en: '/team',
    de: '/unser-team',
    ru: '/hаша-команда',
  },

    '/doktorlar': {
    tr: '/doktorlar',
    en: '/doctors',
    de: '/arzte',
    ru: '/bрачи',
  },

    '/blog': {
    tr: '/blog',
    en: '/blog',
    de: '/blog',
    ru: '/Блог',
  },

    '/galeri': {
    tr: '/galeri',
    en: '/gallery',
    de: '/galerie',
    ru: '/Галерея',
  },

     '/iletisim': {
    tr: '/iletisim',
    en: '/contact',
    de: '/kontakt',
    ru: '/kонтакты',
  }

}

};

export const routing = defineRouting(config);