<script lang="ts">
	import MobileMenu from '$lib/components/header/MobileMenu.svelte';
	import DesktopMenu from '$lib/components/header/DesktopMenu.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
	import AccMenu from '$lib/components/header/AccMenu.svelte';
	import Burger from '$lib/components/header/Burger.svelte';
	import type { MenuItem } from '$lib/types';

	export let menuItems: MenuItem[];

	let innerWidth: number;
	let isOpen: boolean;

	$: desktop = innerWidth > 1200;

	//write function to open burger
</script>

<svelte:window bind:innerWidth />

<header>
	{#if !desktop}
		<Burger bind:isOpen on:click={() => (isOpen = !isOpen)} />
	{/if}
	<Logo height={2.7} />
	<DesktopMenu {menuItems} />
	<AccMenu height={2.5} />
</header>
{#if !desktop}
	<MobileMenu bind:isOpen {menuItems} />
{/if}

<style>
	header {
		/* position: fixed; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 4rem;
	}
</style>
