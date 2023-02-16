import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'lt',
			key: 'common',
			loader: async () => (await import('./lt/common.json')).default
		},
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
