<script lang="ts">
	export let height: number = 4;
	export let isOpen: boolean = false;

	function remToPx(rem: number) {
		return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
	}

	let width = 0.25;
	//triangle side in rem
	let side = 1.25;
	let a = remToPx(side);
</script>

<div class="collapse-direction" style="height: {height}; width: {a}px">
	<div class="upper-tip-container">
		<svg width={a} height={a}>
			<polygon
				class="tip {isOpen ? '' : 'hide'}"
				style="transform-origin: {side / 2}rem 0"
				points="{a / 2} {a / 6.667}, {a} {a}, 0 {a}"
				fill="black"
			/>
		</svg>
	</div>

	<div class="arrow-container">
		<svg width="{side-width}rem" height="{height}rem">
			<rect x="50%" class="arrow" width="{width}rem" height="{height}rem" />
		</svg>
	</div>
	<div class="bottom-tip-container">
		<svg width={a} height={a}>
			<polygon
				class="tip {isOpen ? 'hide' : ''}"
				style="transform-origin: {side / 2}rem 0"
				points="0 {a / 6.667}, {a} {a / 6.667}, {a / 2} {a}"
				fill="black"
			/>
		</svg>
	</div>
</div>

<style>
	.collapse-direction {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.upper-tip-container {
		position: absolute;
	}

	.arrow-container {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.bottom-tip-container {
		position: absolute;
		bottom: 0;
	}

	.tip {
		/* transform-origin: 0.75rem 0; */
		transform: scale(1, 1);
		transition: transform 0.3s ease-in-out;
	}

	.hide {
		transform: scale(0, 0.5);
	}
</style>
