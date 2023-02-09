<script lang="ts">
	export let label: string = '';
	export let slug: string = '';
	export let h: number = 2.7;
	export let onClick = (e: any) => {};
</script>

{#if slug !== ''}
	<a href={`/${slug}`} style={`height: ${h}rem; line-height: ${h}rem`}>
		{label}
	</a>
{:else}
	<button on:click={onClick} style={`height: ${h}rem; line-height: ${h}rem`}>
		{label}
	</button>
{/if}

<style>
	button {
		padding: 0 1rem;

		background: none;
		color: inherit;
		border: none;
		font: inherit;
		cursor: pointer;
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 500;
	}

	a {
		padding: 0 1rem;
		display: inline-block;
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 500;
	}

	@media (max-width: 960px) {
		button {
			width: 100%;
			text-align: center;
			padding: 0;
		}

		a {
			width: 100%;
			text-align: center;
			padding: 0;
		}
	}
</style>
