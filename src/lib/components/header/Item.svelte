<script lang="ts">
	import type { LocalisedString } from '$lib/types';
	import { locale } from '$lib/locales/translations';

	export let label: LocalisedString;
	export let slug: LocalisedString = { lt: '', en: '' };
	export let h: number = 2.7;
	export let size: number = 1;
	export let onClick = (e: any) => {};
</script>

{#if slug[$locale] !== ''}
	<a
		href={`/pages/${slug[$locale]}`}
		style={`height: ${h}rem; line-height: ${h}rem; font-size: ${size}rem`}
		on:click={onClick}
	>
		{label[$locale]}
	</a>
{:else}
	<button on:click={onClick} style={`height: ${h}rem; line-height: ${h}rem; font-size: ${size}rem`}>
		{label[$locale]}
	</button>
{/if}

<style>
	button {
		padding: 0 0.66rem;
		background: none;
		color: inherit;
		border: none;
		font: inherit;
		cursor: pointer;
		text-transform: uppercase;
		font-family: var(--font-head);
		font-size: 1.2rem;
		font-weight: 500;
		white-space: nowrap;
	}

	a {
		padding: 0 0.66rem;
		display: inline-block;
		text-transform: uppercase;
		font-family: var(--font-head);
		font-size: 1.2rem;
		font-weight: 500;
		white-space: nowrap;
	}

	@media (max-width: 1200px) {
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
