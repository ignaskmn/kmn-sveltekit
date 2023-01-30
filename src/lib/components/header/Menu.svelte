<script lang="ts">
	import { menuItems } from '$lib/data/menuItems.js';
	import MenuDropdown from './MenuDropdown.svelte';
	import MenuItem from './MenuItem.svelte';

	export let open: string = '';

	function handleClick(event: any) {
		const target = event.target as HTMLElement;
		const label = target.innerText;
		open = open.toLowerCase() === label.toLowerCase() ? '' : label.toLowerCase();
		console.log(open);
	}

	function clickOutside(element: any, callbackFunction: any) {
		function onClick(event: any) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: any) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}
</script>

<nav
	use:clickOutside={() => {
		open = '';
	}}
>
	<ul>
		{#each menuItems as item, i}
			{#if !item.submenu}
				<div class="menu-item">
					<MenuItem label={item.label} slug={item.slug} />
				</div>
			{:else}
				<div
					class="menu-item"
					on:click={handleClick}
					on:keydown={handleClick}
					aria-haspopup="menu"
					aria-expanded={open === item.label.toLowerCase()}
				>
					<MenuItem label={item.label} />
					<MenuDropdown menuItems={item.submenuItems} isOpen={open === item.label.toLowerCase()} />
				</div>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	nav ul {
		display: flex;
		flex-direction: row;
		margin: 0;
		padding: 0;
	}

	.menu-item {
		position: relative;
	}
</style>
