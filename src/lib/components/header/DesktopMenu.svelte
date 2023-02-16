<script lang="ts">
	import { slide } from 'svelte/transition';
	import Item from './Item.svelte';
	import { menuItems } from '$lib/data/menuItems.js';

	let isSubmenuOpen = false;
	let hover = false;
	let submenu = '';

	// height of every menu item
	export let itemHeight: number = 2.7;

	function toggleSubmenu(e: any) {
		isSubmenuOpen = !isSubmenuOpen;
		const parent = e.target.parentNode;
		const id = parent.id;
		const submenuItems = menuItems.find((item: any) => item.id === id)?.submenuItems.length;
		submenu = submenu === id ? '' : id;
	}

	function handleMouseEnter(event: any) {
		hover = true;
		const target = event.target as HTMLElement;
		const id = target.id;
		submenu = id;
	}

	function handleMouseLeave(event: any) {
		hover = false;
		const target = event.target as HTMLElement;
		const id = target.id;
		setTimeout(() => {
			if (submenu === id && hover === false) {
				submenu = '';
			}
		}, 200);
	}

	function outsideClose(event: any) {
		const target = event.target as HTMLElement;
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
					<Item label={item.label} slug={item.slug} />
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
						<ul class="submenu" in:slide={{ duration: 100 }} out:slide={{ duration: 300 }}>
							{#each item.submenuItems as subitem}
								<li>
									<Item label={subitem.label} slug={subitem.slug} h={itemHeight} />
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
</style>
