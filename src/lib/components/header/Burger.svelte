<script lang="ts">
	export let isOpen = false;
</script>

<button class={`burger ${isOpen ? 'open' : ''}`} on:click>
	<div />
	<div />
	<div />
</button>

<style>
	.burger {
		/* display: none; */
		display: flex;

		background-color: var(--color-bg-0);
		border: none;
		cursor: pointer;

		height: 2rem;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	.burger div {
		/* display: none; */
		display: block;
		width: 2rem;
		height: 0.2rem;
		background-color: var(--color-text);
		border-radius: 10px;
		transform-origin: 0.1rem;

		transition: all 0.2s ease-in;
	}

	.burger div:nth-child(1) {
		transform: rotate(0);
	}
	.burger div:nth-child(2) {
		opacity: 1;
	}
	.burger div:nth-child(3) {
		transform: rotate(0);
	}

	.open div:nth-child(1) {
		transform: rotate(45deg) translate(3px, -3px);
	}
	.open div:nth-child(2) {
		opacity: 0;
	}
	.open div:nth-child(3) {
		transform: rotate(-45deg) translate(3px, 3px);
	}
</style>
