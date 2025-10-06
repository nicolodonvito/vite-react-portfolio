import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dynamically import all translation files as namespaces
const loadNamespaces = () => {
  const namespaces = {
    en: {},
    it: {},
  };

  const enFiles = import.meta.glob('./locales/en/*.json', { eager: true });
  for (const path in enFiles) {
    const namespace = path.match(/\.\/locales\/en\/(.*)\.json$/)[1];
    namespaces.en[namespace] = enFiles[path].default;
  }

  const itFiles = import.meta.glob('./locales/it/*.json', { eager: true });
  for (const path in itFiles) {
    const namespace = path.match(/\.\/locales\/it\/(.*)\.json$/)[1];
    namespaces.it[namespace] = itFiles[path].default;
  }

  return namespaces;
};

const resources = loadNamespaces();

// Determine initial language from localStorage or default to 'en'
const storedLanguage = localStorage.getItem('language');
const initialLanguage = storedLanguage || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage, // Use the dynamically determined language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
