import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enCommon from './locales/en/common.json';
import enAuth from './locales/en/auth.json';
import enDashboard from './locales/en/dashboard.json';
import enTitle from './locales/en/title.json';
import enOutline from './locales/en/outline.json';
import enContent from './locales/en/content.json';

// Chinese translations
import zhCommon from './locales/zh/common.json';
import zhAuth from './locales/zh/auth.json';
import zhDashboard from './locales/zh/dashboard.json';
import zhTitle from './locales/zh/title.json';
import zhOutline from './locales/zh/outline.json';
import zhContent from './locales/zh/content.json';

const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    dashboard: enDashboard,
    title: enTitle,
    outline: enOutline,
    content: enContent,
  },
  zh: {
    common: zhCommon,
    auth: zhAuth,
    dashboard: zhDashboard,
    title: zhTitle,
    outline: zhOutline,
    content: zhContent,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'auth', 'dashboard', 'title', 'outline', 'content'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
