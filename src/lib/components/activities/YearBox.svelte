<script lang="ts">
	export let isActive: boolean = false;
	export let year: number = 2022;
	export let onClick: any = () => {};
</script>

<button class="year-box {isActive ? 'active' : ''}" on:click={onClick}> {year} </button>

<style>
	button {
		background-color: var(--color-bg-0);
		border: solid 0.2rem var(--color-text);
		font-family: var(--font-head);
		font-weight: 600;
		font-size: 1.4rem;
		min-width: 7.5rem;
		height: 4rem;
		cursor: pointer;
		position: relative;
	}

	button.active {
		background-color: var(--color-text);
		color: var(--color-bg-0);
	}

	button:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 100%;
		width: var(--gap);
		border: solid 0.1rem var(--color-text);
		pointer-events: none;
	}
</style>
