<script lang="ts">
	import MenuItem from './MenuItem.svelte';

	export let menuItems = [{ slug: 'about', label: 'About' }];
	export let isOpen: boolean = false;
	export let toggleSubmenu = (e: any) => {};
</script>

<ul class={isOpen ? 'visible' : 'hidden'}>
	{#each menuItems as item}
		<MenuItem label={item.label} slug={item.slug} />
	{/each}
	<MenuItem label="Back" on:click={toggleSubmenu} />
</ul>

<style>
	ul {
		position: absolute;
		top: 100%;
		left: 0;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		background-color: var(--color-bg-0);
	}

	.visible {
		display: inline-block;
	}

	.hidden {
		display: none;
	}

	@media (max-width: 960px) {
		ul {
			top: 0;
			left: 100%;
			width: 100%;
		}
	}
</style>
