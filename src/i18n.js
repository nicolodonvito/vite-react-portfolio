import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from "./locales/it.json"
import en from "./locales/en.json"

const resources = {
	it: {
		translation: it
	},
	en: {
		translation: en
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
