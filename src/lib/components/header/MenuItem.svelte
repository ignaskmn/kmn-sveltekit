<script lang="ts">
	export let label: string = '';
	export let slug: string = '';
</script>

{#if slug !== ''}
	<a href={`/${slug}`}>{label}</a>
{:else}
	<button>{label}</button>
{/if}

<style>
	button {
		padding: 0.75rem 1rem;
		background: none;
		color: inherit;
		border: none;
		font: inherit;
		cursor: pointer;
		text-transform: inherit;
	}

	button::after {
		position: absolute;
		content: '';
		top: 1.3rem;
		right: 0.1rem;
		width: 0;
		height: 0;
		display: inline-block;
		border-top: 6px solid var(--color-text);
		border-bottom: 6px solid transparent;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
	}

	a {
		padding: 0.75rem 1rem;
		display: inline-block;
	}
</style>
