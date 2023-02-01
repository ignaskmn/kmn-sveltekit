<script lang="ts">
	import { menuItems } from '$lib/data/menuItems.js';
	import MenuDropdown from './MenuDropdown.svelte';
	import MenuItem from './MenuItem.svelte';

	let open: string = '';
	let hover: boolean = false;
	let innerWidth: number;

	$: condition = innerWidth > 960;

	function handleClick(event: any) {
		const target = event.target.parentElement as HTMLElement;
		const id = target.id;
		open = open === id ? '' : id;
	}

	function handleKeyDown(event: any) {
		const target = event.target.parentElement as HTMLElement;
		const id = target.id;
		if (event.key === 'Space' || event.key === 'ArrowDown') {
			open = open === id ? '' : id;
		}
	}

	function handleMouseEnter(event: any) {
		if (!condition) return;
		hover = true;
		const target = event.target as HTMLElement;
		const id = target.id;
		open = id;
	}

	function handleMouseLeave(event: any) {
		if (!condition) return;
		hover = false;
		const target = event.target as HTMLElement;
		const id = target.id;
		setTimeout(() => {
			if (open === id && hover === false) {
				open = '';
			}
		}, 200);
	}

	function clickOutside(node: HTMLElement) {
		// the node has been mounted in the DOM

		function outsideClick(event: any) {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('outsideclick'));
			}
		}

		document.addEventListener('click', outsideClick, true);

		return {
			destroy() {
				// the node has been removed from the DOM
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<svelte:window bind:innerWidth />

<nav>
	<ul>
		{#each menuItems as item}
			{#if !item.submenu}
				<li class="menu-item" id={item.id}>
					<MenuItem label={item.label} slug={item.slug} />
				</li>
			{:else}
				<li
					class="menu-item"
					id={item.id}
					use:clickOutside
					on:click={handleClick}
					on:outsideclick={() => (open = '')}
					on:keydown={handleKeyDown}
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					aria-haspopup="menu"
					aria-expanded={open === item.id}
				>
					<MenuItem label={item.label} />
					<MenuDropdown menuItems={item.submenuItems} isOpen={open === item.id} />
				</li>
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
		font-size: 1.2rem;
		font-weight: 500;
		text-transform: uppercase;
		display: inline-block;
	}
</style>
