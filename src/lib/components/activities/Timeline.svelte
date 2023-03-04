<script lang="ts">
	import YearBox from './YearBox.svelte';
	import { onMount, afterUpdate } from 'svelte';

	export let years: number[] = [2020, 2021, 2022, 2023];
	export let activeYear: number = 2022;
	let innerWidth: number;

	onMount(() => {
		handleResize();
	});

	afterUpdate(() => {
		handleResize();
	});

	function handleResize() {
		const yearsElement = document.querySelector('.years') as HTMLElement;
		const viewboxElement = document.querySelector('.viewbox') as HTMLElement;

		if (yearsElement.scrollWidth > viewboxElement.clientWidth) {
			viewboxElement.style.overflowX = 'scroll';
			yearsElement.style.width = '100%';

			centerActiveYearBox();
		} else {
			viewboxElement.style.overflowX = 'unset';
			yearsElement.style.width = 'unset';
		}
	}

	function centerActiveYearBox() {
		const viewboxElement = document.querySelector('.viewbox') as HTMLElement;
		const activeYearElement = document.querySelector('.year-box.active') as HTMLElement;

		if (activeYear === years[0]) {
			viewboxElement.scroll({
				left: 0,
				behavior: 'smooth'
			});
		} else if (activeYear === years[years.length - 1]) {
			viewboxElement.scroll({
				left: viewboxElement.scrollWidth - viewboxElement.clientWidth,
				behavior: 'smooth'
			});
		} else {
			viewboxElement.scroll({
				left:
					activeYearElement.offsetLeft -
					viewboxElement.clientWidth / 2 +
					activeYearElement.clientWidth / 2,
				behavior: 'smooth'
			});
		}
	}
</script>

<svelte:window on:resize={handleResize} bind:innerWidth />

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
		display: flex;
		justify-content: center;
		overflow: hidden;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}

	.viewbox::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	.years {
		display: flex;
		/* width: 100%; */
		--gap: 3rem;
		gap: var(--gap);
	}

	/* @media (hover: none) {
		.viewbox {
			overflow-x: scroll;
		}

		.years {
			width: 100%;
		}
	} */
</style>
