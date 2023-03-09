<script lang="ts">
	import { register } from 'swiper/element/bundle';
	import YearBox from './activities/YearBox.svelte';
	import 'swiper/css';

	register();

	export let years: number[] = [2019, 2020, 2021, 2022, 2023];
	export let activeYear: number = 2022;
</script>

<swiper-container class="swiper-container" slides-per-view="3">
	{#each years as year}
		<swiper-slide class="swiper-slide">
			<YearBox
				{year}
				isActive={year === activeYear}
				onClick={() => {
					activeYear = year;
				}}
			/>
		</swiper-slide>
	{/each}
</swiper-container>

<style>
	/* div {
		height: 100px;
		background-color: aquamarine;
		margin: 0 1rem;
	} */
	.swiper-container {
		position: relative;
		width: 100;
	}

	.swiper-slide:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 8rem;
		border: solid 0.1rem var(--color-text);
		pointer-events: none;
	}

	/* .swiper-slide:last-child {
		margin-right: 0;
	} */
</style>
