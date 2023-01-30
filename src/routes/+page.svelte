<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>KMN</title>
	<meta name="description" content="Kauno menininkų namų svetainė" />
</svelte:head>

<section>
	{#each data.docs as example}
		<h1>{example.thisIsAField}</h1>
		<div>{example.id}</div>
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
