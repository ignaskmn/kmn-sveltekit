/** @type {import('../$types').PageLoad} */

type List = {
	docs: Example[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: number;
	nextPage: number;
};

type Example = {
	id: string;
	thisIsAField: string;
	createdAt: string;
	updatedAt: string;
};

export async function load(): Promise<{ exampleDocs: Example[] }> {
	const examples: List = await fetch('https://tvs.kmn.lt/api/examples').then((r) => r.json());

	const exampleDocs = examples.docs;

	return {
		exampleDocs
	};
}
