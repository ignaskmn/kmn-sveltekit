<script lang="ts">
	import YearBox from './YearBox.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import { handleResize } from './utilities';

	export let years: number[] = [2020, 2021, 2022, 2023];
	export let activeYear: number = 2022;
	// let drag = false;
	// let dragStart = 0;

	onMount(() => {
		handleResize(years, activeYear);
	});

	afterUpdate(() => {
		handleResize(years, activeYear);
	});

	function resize() {
		handleResize(years, activeYear);
	}

	// Handle mouse drags

	// function downListener(e: MouseEvent) {
	// 	drag = true;
	// 	const yearsElement = document.querySelector('.years') as HTMLElement;
	// 	// const yearElement = document.querySelector('.year-box') as HTMLElement;
	// 	yearsElement.addEventListener('mousemove', moveListener);
	// 	window.addEventListener('mouseup', upListener);
	// 	// yearElement.style.pointerEvents = 'none';

	// 	dragStart = e.clientX;
	// 	console.log('dragStart', dragStart);
	// }

	// function moveListener(e: MouseEvent) {
	// 	const yearElement = document.querySelector('.year-box') as HTMLElement;
	// 	if (!drag) {
	// 		yearElement.style.pointerEvents = 'unset';
	// 		return;
	// 	}
	// 	const offset = 50;
	// 	const ativeYearIndex = years.indexOf(activeYear);

	// 	yearElement.style.pointerEvents = 'none';

	// 	if (e.clientX - dragStart > offset) {
	// 		if (ativeYearIndex > 0 && ativeYearIndex < years.length) {
	// 			activeYear = years[ativeYearIndex - 1];
	// 			drag = false;
	// 		}
	// 		console.log('right');
	// 	} else if (e.clientX - dragStart < -offset) {
	// 		if (ativeYearIndex >= 0 && ativeYearIndex < years.length - 1) {
	// 			activeYear = years[ativeYearIndex + 1];
	// 			drag = false;
	// 		}
	// 		console.log('left');
	// 	}

	// 	// drag = true;
	// 	//
	// }

	// function upListener() {
	// 	const yearsElement = document.querySelector('.years') as HTMLElement;
	// 	drag = false;
	// 	yearsElement.removeEventListener('mousemove', moveListener);
	// 	window.removeEventListener('mouseup', upListener);
	// }
</script>

<svelte:window on:resize={resize} />

<div class="viewbox">
	<!-- <div class="years" on:mousedown={downListener} on:pointerdown={downListener}> -->
	<div class="years">
		{#each years as year}
			<div class="year-box">
				<YearBox
					{year}
					isActive={year === activeYear}
					onClick={() => {
						activeYear = year;
					}}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.viewbox {
		width: 100%;
		display: flex;
		justify-content: center;
		overflow: hidden;
	}

	.years {
		display: flex;
		--gap: 3rem;
		gap: var(--gap);
		transition: transform 0.3s ease-in-out;
	}

	.year-box {
		position: relative;
	}

	.year-box:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 50%;
		width: var(--gap);
		border: solid 0.1rem var(--color-text);
		pointer-events: none;
	}
</style>
