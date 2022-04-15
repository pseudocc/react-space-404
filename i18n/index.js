import i18n from 'i18next';
import en_module from './en.json';
import chs_module from './chs.json';
import { initReactI18next } from 'react-i18next';

/**
 * @typedef {keyof resources} SupportedLanguage
 */

const resources = {
  en: { space: en_module },
  chs: { space: chs_module }
};

/**
 * @type {SupportedLanguage}
 */
export const language_d = 'en';

i18n
  .use(initReactI18next)
  .init({
    ns: ['space'],
    defaultNS: 'space',
    fallbackLng: language_d,
    interpolation: {
      escapeValue: false,
    },
    resources
  });

export default i18n;
