<script lang="ts">
	import MobileMenu from "../lib/components/header/MobileMenu.svelte";
	import DesktopMenu from "../lib/components/header/DesktopMenu.svelte";
	import Logo from "../lib/components/header/Logo.svelte";
	import Burger from "../lib/components/header/Burger.svelte";

	let innerWidth: number;
	let isOpen: boolean;

	$: desktop = innerWidth > 960;


</script>

<svelte:window bind:innerWidth/>

<header>
	{#if !desktop}
		<Burger bind:isOpen on:click={() => isOpen = !isOpen}/>
	{/if}
	<Logo />
	{#if desktop}
		<DesktopMenu />
	{/if}
	<span>Acc</span>
</header>
{#if !desktop}
	<MobileMenu bind:isOpen/>
{/if}
<p>Content</p>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

</style>
