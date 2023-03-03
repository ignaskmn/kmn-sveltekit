<script lang="ts">
	import { t, locale } from '$lib/locales/translations';
	export let height: number = 2.7;

	const switchLocale = (e: any) => {
		locale.set(locale.get() === 'lt' ? 'en' : 'lt');
	};
</script>

<button on:click={switchLocale}>
	<svg
		width={`${height}rem`}
		height={`${height}rem`}
		viewBox="0 0 41 41"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="border"
	>
		<style>
			.lang {
				font-size: 1.2rem;
				font-weight: 600;
				text-transform: uppercase;
				user-select: none;
				fill: var(--color-text);
			}
		</style>
		<rect x="1.37732" y="1" width="39" height="39" rx="19.5" fill="white" stroke="#0F1538" />
		<text x="51%" y="55%" text-anchor="middle" alignment-baseline="middle" class="lang">
			{$locale === 'lt' ? 'en' : 'lt'}
		</text>
	</svg>
</button>

<style>
	button {
		background: none;
		border: none;
		padding: 0;
		line-height: 0.5rem;
	}
	.border {
		cursor: pointer;
	}
</style>
