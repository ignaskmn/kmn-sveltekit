<script lang="ts">
	import { slide } from 'svelte/transition';
	import MenuItem from './MenuItem.svelte';
	import { menuItems } from '$lib/data/menuItems.js';

	let isOpen = false;
	let isSubmenuOpen = false;
	let submenu = '';
	let menuHeight: number;
	let submenuHeight: number;

	// height of every menu item
	let itemHeight: number = 2.7;

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

	$: condition = innerWidth > 960;
	$: menuHeight = isSubmenuOpen ? submenuHeight * itemHeight : menuItems.length * itemHeight;

</script>

<div class="screen">
<button class="burger" on:click={toggleMenu}>Burger</button>
	<nav style="height: {isOpen ? menuHeight.toString() : '0'}rem" class='menu'>
		<ul class={`${isSubmenuOpen ? 'slide' : ''}`}>
			{#each menuItems as item}
				{#if !item.submenu}
					<li class="menu-item" id={item.id}>
						<MenuItem label={item.label} slug={item.slug} />
					</li>
				{:else}
					<li class="menu-item" id={item.id}>
						<MenuItem label={item.label} onClick={toggleSubmenu} />
						{#if item.id === submenu}
							<ul class="submenu">
								{#each item.submenuItems as subitem}
									<li>
										<MenuItem label={subitem.label} slug={subitem.slug} h={itemHeight} />
									</li>
								{/each}
								{#if !condition}
									<li>
										<MenuItem label="<- Atgal" h={itemHeight} onClick={closeMobileSubmenu} />
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
<p>Content</p>

<style>
	.screen {
		width: 100%;
		overflow: hidden;
	}

	@media (max-width: 960px) {
		.burger {
			display: block;
		}

		.menu {
			width: 100%;
			transition: height 0.3s ease-in-out;
		}

		.menu ul {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			list-style: none;
			margin: 0;
			padding: 0;
			transition: transform 0.3s ease-in-out;
		}

		.menu-item {
			width: 100%;
			display: flex;
			flex-direction: row;
		}

		.menu-btn {
			width: 100%;
			height: 1.5rem;
		}

		.submenu {
			position: absolute;
			display: flex;
			flex-direction: column;
			left: 100%;
			top: 0;
			list-style: none;
			margin: 0;
			padding: 0;
			width: 100%;
		}

		.submenu-btn {
			width: 100%;
			height: 1.5rem;
		}

		.slide {
			transform: translateX(-100%);
		}
	}
</style>
