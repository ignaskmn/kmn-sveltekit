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
	// createdAt: string;
	// updatedAt: string;
};

import type { PageServerLoad } from './$types';

const query = `
query ExampleQuery {
  Examples {
    docs {
      id
      thisIsAField
    }
  }
}
`;

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch('https://tvs.kmn.lt/api/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query
			})
		});

		// const { data: responseData }: { data: Example[] } = await response.json();

		const exampleData = await response.json();
		// console.log('exampleData', exampleData);
		// const { data: exampleData }: { data: List } = await response.json();
		const exampleDocs = exampleData.data.Examples;

		// console.log('exampleDocs', exampleDocs);

		return { ...exampleDocs };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
