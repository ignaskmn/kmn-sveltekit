<script lang="ts">
	import { slide } from 'svelte/transition';
	import Item from './Item.svelte';
	import type { MenuItem } from '$lib/types';

	export let menuItems: MenuItem[];

	let isSubmenuOpen = false;
	let hover = false;
	let submenu = '';

	// height of every menu item
	export let itemHeight: number = 2.7;

	function toggleSubmenu(e: any) {
		isSubmenuOpen = !isSubmenuOpen;
		const parent = e.target.parentNode;
		const id = parent.id;
		submenu = submenu === id ? '' : id;
	}

	function handleMouseEnter(e: any) {
		hover = true;
		const target = e.target as HTMLElement;
		const id = target.id;
		submenu = id;
	}

	function handleMouseLeave(e: any) {
		hover = false;
		const target = e.target as HTMLElement;
		const id = target.id;
		setTimeout(() => {
			if (submenu === id && hover === false) {
				submenu = '';
			}
		}, 200);
	}

	function outsideClose(e: any) {
		const target = e.target as HTMLElement;
		if (target.closest('.menu-item')) return;
		submenu = '';
		isSubmenuOpen = false;
		hover = false;
	}
</script>

<svelte:window on:click={outsideClose} />

<nav class="menu">
	<ul>
		{#each menuItems as item}
			{#if !item.submenu}
				<li class="menu-item" id={item.id}>
					<Item label={item.label} slug={item.slug} onClick={toggleSubmenu} />
				</li>
			{:else}
				<li
					class="menu-item"
					id={item.id}
					on:mouseenter={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					aria-haspopup="menu"
					aria-expanded={submenu === item.id}
				>
					<Item label={item.label} onClick={toggleSubmenu} />
					{#if item.id === submenu}
						<ul class="submenu">
							{#each item.submenuItems as subitem}
								<li in:slide={{ duration: 150 }} out:slide={{ duration: 50 }}>
									<Item
										label={subitem.label}
										slug={subitem.slug}
										h={itemHeight}
										onClick={toggleSubmenu}
									/>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	.menu {
		display: block;
	}

	.menu ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu-item {
		position: relative;
	}

	.submenu {
		position: absolute;
		display: flex;
		top: 100%;
		flex-direction: column;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		background-color: var(--color-bg-0);
	}

	@media (max-width: 1200px) {
		.menu {
			display: none;
		}
	}
</style>
