<script lang="ts">
	import { slide } from 'svelte/transition';
	import { menuItems } from '$lib/data/menuItems.js';

	let isOpen = false;
	let isSubmenuOpen = false;
	let submenu = '';
	let menuHeight: number;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function toggleSubmenu(e: any) {
		isSubmenuOpen = !isSubmenuOpen;
		const target = e.target.parentNode;
		const id = target.id;
		submenu = submenu === id ? '' : id;
	}

	$: menuHeight = isSubmenuOpen ? 3 * 1.5 : menuItems.length * 1.5;
</script>

<button class="burger" on:click={toggleMenu}>Burger</button>

<div class="screen">
	{#if isOpen}
		<div class="nav-container" in:slide out:slide>
			<nav style="height: {menuHeight.toString()}rem" class="menu">
				<ul class={`${isSubmenuOpen ? 'slide' : ''}`}>
					{#each menuItems as item}
						<li class="menu-item" id={item.id}>
							<button class="menu-btn" on:click={toggleSubmenu}>{item.label}</button>
							{#if item.id === submenu}
								<ul class="submenu">
									<li>
										<button class="submenu-btn"> Submenu item </button>
									</li>
									<li>
										<button class="submenu-btn"> Submenu item </button>
									</li>
									<li>
										<button class="submenu-btn" on:click={toggleSubmenu}> Back </button>
									</li>
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	{/if}
	<p>Content</p>
</div>

<style>
	.screen {
		width: 100%;
		overflow: hidden;
	}

	.nav-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow: hidden;
	}

	.burger {
		display: block;
		cursor: pointer;
		top: 1rem;
		right: 1rem;
		padding: 0;
	}

	.menu {
		width: 100%;
		transition: height 0.3s ease-in-out;
	}

	.menu ul {
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
</style>
