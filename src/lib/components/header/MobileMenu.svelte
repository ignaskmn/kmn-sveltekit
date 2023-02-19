<script lang="ts">
	import { slide } from 'svelte/transition';
	import Item from './Item.svelte';
	import type { MenuItem, LocalisedString } from '$lib/types';

	export let menuItems: MenuItem[];

	// height of every menu item
	export let itemHeight: number = 2.7;

	export let isOpen = false;
	let isSubmenuOpen = false;
	let submenu = '';
	let menuHeight: number;
	let submenuHeight: number;

	const back: LocalisedString = {
		lt: '<-Atgal',
		en: '<-Back'
	};

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function toggleSubmenu(e: any) {
		isSubmenuOpen = !isSubmenuOpen;
		const parent = e.target.parentNode;
		const id = parent.id;
		const submenuItems = menuItems.find((item: any) => item.id === id)?.submenuItems.length;
		if (submenuItems) {
			submenuHeight = submenuItems + 1;
		}
		submenu = submenu === id ? '' : id;
	}

	function closeMobileSubmenu() {
		isSubmenuOpen = false;
		setTimeout(() => {
			submenu = '';
		}, 250);
	}

	function outsideClose(event: any) {
		const target = event.target as HTMLElement;
		if (target.closest('.menu-item') || target.closest('.burger') || target.closest('.lang'))
			return;
		isOpen = false;
	}

	$: menuHeight = isSubmenuOpen ? submenuHeight * itemHeight : menuItems.length * itemHeight;
</script>

<svelte:window on:click={outsideClose} />

{#if isOpen}
	<nav class="menu" style={`height: ${menuHeight}rem`} in:slide out:slide>
		<ul class={`${isSubmenuOpen ? 'slide' : ''}`}>
			{#each menuItems as item}
				{#if !item.submenu}
					<li class="menu-item" id={item.id}>
						<Item label={item.label} slug={item.slug} />
					</li>
				{:else}
					<li
						class="menu-item"
						id={item.id}
						aria-haspopup="menu"
						aria-expanded={submenu === item.id}
					>
						<Item label={item.label} onClick={toggleSubmenu} />
						{#if item.id === submenu}
							<ul class="submenu">
								{#each item.submenuItems as subitem}
									<li>
										<Item label={subitem.label} slug={subitem.slug} h={itemHeight} />
									</li>
								{/each}
								<li>
									<Item label={back} h={itemHeight} onClick={closeMobileSubmenu} />
								</li>
							</ul>
						{/if}
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.menu {
		width: 100%;
		transition: height 0.3s ease-in-out;
		overflow: hidden;
	}

	.menu ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		margin: 0;
		padding: 0;
		transition: transform 0.3s ease-in-out;
	}

	.menu-item {
		width: 100%;
	}

	.submenu {
		position: absolute;
		display: flex;
		left: 100%;
		top: 0;
		width: 100%;
		flex-direction: column;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		background-color: var(--color-bg-0);
	}

	.slide {
		transform: translateX(-100%);
	}
</style>
