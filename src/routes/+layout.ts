import { locale, loadTranslations } from '$lib/locales/translations';
import type { LayoutLoad, LayoutLoadEvent } from './$types';

export const load: LayoutLoad = async ({ data, url }: LayoutLoadEvent) => {
	const { pathname } = url;
	const defaultLocale = 'lt';
	const initLocale = locale.get() || defaultLocale;
	await loadTranslations(initLocale, pathname);

	return { data };
};
