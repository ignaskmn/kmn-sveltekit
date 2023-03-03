<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Puslapis</title>
	<meta name="description" content="Kauno menininkų namų svetainė" />
</svelte:head>

<h1>{data.slug}</h1>

<style>
	h1 {
		text-transform: capitalize;
		padding: 0;
		margin: 0 10rem;
		text-align: left;
	}
</style>
