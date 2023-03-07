<script lang="ts">
	export let isActive: boolean = false;
	export let year: number = 2022;
	export let onClick: any = () => {};
</script>

<button class="year {isActive ? 'active' : ''}" on:click={onClick}> {year} </button>

<style>
	button {
		background-color: var(--color-bg-0);
		border: solid 0.2rem var(--color-text);
		font-family: var(--font-head);
		font-weight: 600;
		font-size: 1.4rem;
		width: 7.5rem;
		height: 4rem;
		cursor: pointer;
		position: relative;
		margin: 0;
		user-select: none;
	}

	button.active {
		background-color: var(--color-text);
		color: var(--color-bg-0);
	}

	@media (max-width: 480px) {
		button {
			width: 6rem;
			height: 3rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 380px) {
		button {
			width: 5rem;
		}
	}
</style>
