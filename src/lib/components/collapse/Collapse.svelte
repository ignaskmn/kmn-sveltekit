<script lang="ts">
	import Arrow from './Arrow.svelte';

	export let heading: string = 'Heading';
</script>

<div class="heading-container">
	<h1>{heading}</h1>
	<Arrow height={4} />
</div>

<style>
	.heading-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 480px;
	}

	h1 {
		margin: 0;
	}

	.arrow {
		font-size: 1.5rem;
	}
</style>
