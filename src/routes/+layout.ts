import { locale, loadTranslations } from '$lib/locales/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }: { url: any }) => {
	const { pathname } = url;
	const defaultLocale = 'lt';
	const initLocale = locale.get() || defaultLocale;
	await loadTranslations(initLocale, pathname);

	return {};
};
