<script lang="ts">
	import { menuItems } from '$lib/data/menuItems.js';
	import Burger from './Burger.svelte';
	import Submenu from './Submenu.svelte';
	import MenuItem from './Item.svelte';

	let open: string = '';
	let hover: boolean = false;
	let showMobile: boolean = false;
	let innerWidth: number;

	$: condition = innerWidth > 960;

	function handleClick(event: any) {
		const target = event.target.parentElement as HTMLElement;
		const id = target.id;
		open = open === id ? '' : id;
	}

	function closeSubmenu(event: any) {
		const target = event.target as HTMLElement;
		if (target.closest('.menu-item')) return;
		open = '';
		hover = false;
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

	function toggleMobile() {
		showMobile = !showMobile;
	}
</script>

<svelte:window bind:innerWidth on:click={closeSubmenu} />

<nav>
	<Burger isOpen={showMobile} on:click={toggleMobile} />
	<ul class={showMobile ? 'visible' : ''}>
		{#each menuItems as item}
			{#if !item.submenu}
				<li class="menu-item" id={item.id}>
					<MenuItem label={item.label} slug={item.slug} />
				</li>
			{:else}
				<li
					class="menu-item"
					id={item.id}
					on:click={handleClick}
					on:keydown={handleKeyDown}
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					aria-haspopup="menu"
					aria-expanded={open === item.id}
				>
					<MenuItem label={item.label} />
					<Submenu menuItems={item.submenuItems} isOpen={open === item.id} />
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav {
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	nav ul {
		display: flex;
		flex-direction: row;
		width: fit-content;
		margin: 0;
		padding: 0;
	}

	.menu-item {
		position: relative;
		display: inline-block;
	}

	@media (max-width: 960px) {
		nav {
			position: fixed;
			right: 0;
			width: 200px;
		}

		nav ul {
			flex-direction: column;
			min-height: 100vh;
			transform: translateX(135%);

			transition: transform 0.3s ease-in-out;
		}

		.visible {
			transform: translateX(0);
		}

		.menu-item {
			position: relative;
		}
	}
</style>
