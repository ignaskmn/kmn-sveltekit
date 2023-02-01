<script lang="ts">
	import { menuItems } from '$lib/data/menuItems.js';
	import MenuDropdown from './MenuDropdown.svelte';
	import MenuItem from './MenuItem.svelte';

	export let open: string = '';
	let innerWidth: number;

	$: condition = innerWidth > 960;

	function handleClick(event: any) {
		const target = event.target as HTMLElement;
		const label = target.innerText;
		open = open.toLowerCase() === label.toLowerCase() ? '' : label.toLowerCase();
	}

	function handleKeyDown(event: any) {
		const target = event.target as HTMLElement;
		const label = target.innerText;
		if (event.key === 'Space' || event.key === 'ArrowDown') {
			open = open.toLowerCase() === label.toLowerCase() ? '' : label.toLowerCase();
		}
	}

	function handleMouseEnter(event: any) {
		if (!condition) return;
		const target = event.target.firstChild as HTMLElement;
		const label = target.innerText;
		open = label.toLowerCase();
		console.log(open);
	}

	function handleMouseLeave(event: any) {
		if (!condition) return;
		const target = event.target.firstChild as HTMLElement;
		const label = target.innerText;
		setTimeout(() => {
			if (open.toLowerCase() === label.toLowerCase()) {
				open = '';
			}
		}, 500);
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
		{#each menuItems as item, i (i)}
			{#if !item.submenu}
				<li class="menu-item">
					<MenuItem label={item.label} slug={item.slug} />
				</li>
			{:else}
				<li
					use:clickOutside
					class="menu-item"
					on:click={handleClick}
					on:outsideclick={() => (open = '')}
					on:keydown={handleKeyDown}
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					aria-haspopup="menu"
					aria-expanded={open === item.label.toLowerCase()}
				>
					<MenuItem label={item.label} />
					<MenuDropdown menuItems={item.submenuItems} isOpen={open === item.label.toLowerCase()} />
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
