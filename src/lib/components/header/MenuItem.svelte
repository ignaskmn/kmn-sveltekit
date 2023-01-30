<script lang="ts">
	export let label: string = '';
	export let slug: string = '';
</script>

<li>
	<button>
		{#if slug !== ''}
			<a href={`/${slug}`}>{label}</a>
		{:else}
			<span>{label}</span>
		{/if}
	</button>
</li>

<style>
	li {
		font-size: 1.2rem;
		font-weight: 500;
		text-transform: uppercase;
		display: inline-block;
	}

	button {
		background: none;
		color: inherit;
		border: none;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		text-transform: inherit;
		text-align: left;
		padding: 0;
	}

	a {
		display: inline-block;
		padding: 0.75rem 1rem;
	}

	span {
		display: inline-block;
		padding: 0.75rem 1rem;
	}
</style>
