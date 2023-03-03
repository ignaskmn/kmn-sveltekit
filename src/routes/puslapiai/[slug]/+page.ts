import { error, type NavigationEvent } from '@sveltejs/kit';

export function load(params: NavigationEvent) {
	return {
		slug: params.params.slug
	};

	throw error(404, 'Not found');
}
