<script lang="ts">
	import { slide } from 'svelte/transition';

	let isOpen = false;
	let isSubmenuOpen = false;
	let destroy = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function toggleSubmenu() {
		isSubmenuOpen = !isSubmenuOpen;
		if (isSubmenuOpen) {
			setTimeout(() => {
				destroy = true;
			}, 300);
		} else {
			destroy = false;
		}
	}
</script>

<button class="burger" on:click={toggleMenu}>Burger</button>

<div class="screen">
	{#if isOpen}
		<div class="nav-container" transition:slide>
			<nav class={`menu ${isSubmenuOpen ? 'slide' : ''}`}>
				<ul>
					<li class={destroy ? 'destroy' : ''}>
						<button class="menu-btn" on:click={toggleSubmenu}> Submenu </button>
					</li>
					<li class={destroy ? 'destroy' : ''}>
						<button class="menu-btn" on:click={toggleSubmenu}> Submenu </button>
					</li>
					<li class={destroy ? 'destroy' : ''}>
						<button class="menu-btn" on:click={toggleSubmenu}> Submenu </button>
					</li>
					<li class={destroy ? 'destroy' : ''}>
						<button class="menu-btn" on:click={toggleSubmenu}> Submenu </button>
					</li>
				</ul>
			</nav>
			<nav class={`submenu ${isSubmenuOpen ? 'slide' : ''}`}>
				<ul>
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
			</nav>
		</div>
	{/if}
	<p transition:slide>Content</p>
</div>

<style>
	.screen {
		width: 100%;
		overflow: hidden;
	}

	.nav-container {
		width: 200%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		max-height: 100px;
		background-color: aqua;
		transition: all 0.3s ease-in-out;
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
		height: 100%;
		transform: translateX(0);
		transition: all 0.3s ease-in-out;
	}

	.menu ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.menu-btn {
		width: 100%;
	}

	.submenu {
		width: 100%;
		height: 100%;
		transform: translateX(0);
		transition: all 0.3s ease-in-out;
	}

	.submenu ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.submenu-btn {
		width: 100%;
	}

	.slide {
		transform: translateX(-100%);
	}

	.destroy {
		display: none;
	}

	p {
	}
</style>
