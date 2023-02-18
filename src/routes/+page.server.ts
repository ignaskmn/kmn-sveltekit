import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		return {
			result: await fetch('http://localhost:3000/api/examples?locale=*').then((res) => res.json())
		};
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
