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
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 500;
	}

	button::after {
		position: absolute;
		content: '';
		top: 1.3rem;
		right: 0.1rem;
		width: 0;
		height: 0;
		display: inline-block;
		border-top: 0.3rem solid var(--color-text);
		border-bottom: 0.3rem solid transparent;
		border-left: 0.3rem solid transparent;
		border-right: 0.3rem solid transparent;
	}

	a {
		padding: 0.75rem 1rem;
		display: inline-block;
		text-transform: uppercase;
		font-size: 1.2rem;
		font-weight: 500;
	}

	@media (max-width: 960px) {
		button::after {
			top: 1.2rem;
			border-top: 0.3rem solid transparent;
			border-bottom: 0.3rem solid transparent;
			border-left: 0.3rem solid var(--color-text);
			border-right: 0.3rem solid transparent;
		}
	}
</style>
