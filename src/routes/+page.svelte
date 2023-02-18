<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { locale } from '$lib/locales/translations';
	import { slide } from 'svelte/transition';

	export let data: Examples;
	const examples: Example[] = data.result.docs;

	type Examples = {
		result: {
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
	};

	type Example = {
		id: string;
		thisIsAField: LocalisedString;
		// createdAt: string;
		// updatedAt: string;
	};

	type LocalisedString = {
		[key: string]: string;
		lt: string;
		en: string;
	};
</script>

<svelte:head>
	<title>KMN</title>
	<meta name="description" content="Kauno menininkų namų svetainė" />
</svelte:head>

<section>
	{#each examples as { thisIsAField, id }, i (id)}
		{#if thisIsAField[$locale]}
			<div transition:slide={{ duration: 150 }}>
				<h1>{thisIsAField[$locale]}</h1>
				<div>{id}</div>
			</div>
		{/if}
	{/each}
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		font-weight: 400;
	}
</style>
