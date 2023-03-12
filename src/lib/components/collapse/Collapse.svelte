<script lang="ts">
	import Arrow from './Arrow.svelte';

	export let heading: string = 'Veiklos / Koncerto pavadinimas';
</script>

<div class="heading-container">
	<h2>{heading}</h2>
	<Arrow height={6} />
</div>

<style>
	.heading-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	h2 {
		margin: 0;
	}

	/* .arrow {
		font-size: 1.5rem;
	} */
</style>
