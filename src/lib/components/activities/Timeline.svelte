<script lang="ts">
	import YearBox from './YearBox.svelte';
	import { onMount, afterUpdate } from 'svelte';

	export let years: number[] = [2020, 2021, 2022, 2023];
	export let activeYear: number = 2022;

	onMount(() => {
		function handleResize() {
			centerActiveYearBox();
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	afterUpdate(() => {
		centerActiveYearBox();
	});

	function centerActiveYearBox() {
		const viewbox = document.querySelector('.viewbox') as HTMLElement;
		const yearBoxes = document.querySelectorAll('.year-box');
		const activeYearBox = document.querySelector('.year-box.active');
		if (!yearBoxes || !activeYearBox) return;
		const viewboxWidth = viewbox.clientWidth;
		const activeYearBoxRect = activeYearBox.getBoundingClientRect();
		const yearBoxesRect = yearBoxes[0].getBoundingClientRect();
		console.log('activeYearBoxRect:', activeYearBoxRect, 'yearBoxesRect:', yearBoxesRect);
		const offset =
			activeYearBoxRect.left -
			yearBoxesRect.left -
			yearBoxesRect.width / 2 +
			activeYearBoxRect.width -
			viewboxWidth / 2;
		const years = document.querySelector('.years') as HTMLElement;
		years.style.transform = `translateX(${-offset}px)`;
	}
</script>

<div class="viewbox">
	<div class="years">
		{#each years as year}
			<YearBox
				{year}
				isActive={year === activeYear}
				onClick={() => {
					activeYear = year;
				}}
			/>
		{/each}
	</div>
</div>

<style>
	.viewbox {
		width: 100%;
		overflow: hidden;
	}

	.years {
		display: flex;
		--gap: 3rem;
		gap: var(--gap);
		transition: transform 0.5s ease-in-out;
	}
</style>
