<script lang="ts">
	import Item from './Item.svelte';
	import { menuItems } from '$lib/data/menuItems.js';
	import Burger from './Burger.svelte';

	let isOpen = false;
	let isSubmenuOpen = false;
	let hover = false;
	let submenu = '';
	let menuHeight: number;
	let submenuHeight: number;

	// height of every menu item
	let itemHeight: number = 2.7;

	let innerWidth: number;

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

	function handleMouseEnter(event: any) {
		if (!condition) return;
		hover = true;
		const target = event.target as HTMLElement;
		const id = target.id;
		submenu = id;
	}

	function handleMouseLeave(event: any) {
		if (!condition) return;
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
		if (target.closest('.menu-item') || target.closest('.burger')) return;
		if (!condition) {
			isOpen = false;
		} else {
			submenu = '';
			isSubmenuOpen = false;
			hover = false;
		}
	}

	$: condition = innerWidth > 960;
	$: menuHeight = isSubmenuOpen ? submenuHeight * itemHeight : menuItems.length * itemHeight;
</script>

<svelte:window bind:innerWidth on:click={outsideClose} />

<div class="screen">
	{#if !condition}
		<Burger bind:isOpen on:click={toggleMenu} />
	{/if}
	<!-- Nav element logic: if screen smaller than 960px,
	the height of nav is menuHeight in rem if burger open, 0rem if closed.
	If screen is bigger than 960px height is auto  -->
	<nav
		style="height: {!condition ? (isOpen ? [menuHeight.toString(), 'rem'].join('') : '0rem') : ''}"
		class="menu"
	>
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
						on:mouseenter={handleMouseEnter}
						on:mouseleave={handleMouseLeave}
						aria-haspopup="menu"
						aria-expanded={open === item.id}
					>
						<Item label={item.label} onClick={toggleSubmenu} />
						{#if item.id === submenu}
							<ul class="submenu">
								{#each item.submenuItems as subitem}
									<li>
										<Item label={subitem.label} slug={subitem.slug} h={itemHeight} />
									</li>
								{/each}
								{#if !condition}
									<li>
										<Item label="<- Atgal" h={itemHeight} onClick={closeMobileSubmenu} />
									</li>
								{/if}
							</ul>
						{/if}
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</div>
<div class = "content">Content</div>
<style>
	/* .screen {
		width: 100%;
	} */
	.content {
		background-color: red;
		height: 150px;
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

	@media (max-width: 960px) {
		.screen {
			overflow: hidden;
		}

		.menu {
			width: 100%;
			max-height: 100%;
			transition: height 0.3s ease-in-out;
		}

		.menu ul {
			flex-direction: column;
			transition: transform 0.3s ease-in-out;
		}

		.menu-item {
			position: static;
			width: 100%;
			flex-direction: row;
		}

		.submenu {
			left: 100%;
			top: 0;
			width: 100%;
		}

		.slide {
			transform: translateX(-100%);
		}

		.content {
			background-color: green;
		}
	}
</style>
