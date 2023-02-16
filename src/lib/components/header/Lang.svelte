<script lang="ts">
	import { t, locale } from '$lib/locales/translations';
	export let height: number = 2.7;

	// console.log(locale.get());

	const switchLocale = (e: any) => {
		locale.set(locale.get() === 'lt' ? 'en' : 'lt');
	};
</script>

<!-- <div
	class="border"
	style="height: {`${height}rem`}; line-height: {`${height}rem`}; width: {`${height}rem`}"
> -->
<!-- <div class="lang" on:click={changeLocale} on:keydown={changeLocale}>{$t('common.lang')}</div> -->
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
		<text x="50%" y="54%" text-anchor="middle" alignment-baseline="middle" class="lang">
			{$t('common.lang')}
			<!-- en -->
		</text>
	</svg>
</button>

<!-- </div> -->
<style>
	button {
		background: none;
		border: none;
		padding: 0;
	}
	.border {
		cursor: pointer;
	}
</style>
