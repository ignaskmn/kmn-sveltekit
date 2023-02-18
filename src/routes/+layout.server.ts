import { locale, loadTranslations } from '$lib/locales/translations';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		return {
			result: await fetch('http://localhost:3000/api/globals/menu?locale=*').then((res) =>
				res.json()
			)
		};
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
