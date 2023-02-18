<script lang="ts">
	import Header from './Header.svelte';
	import type { Menu, MenuItem } from '$lib/types';
	import './styles.css';

	export let data: Menu;
	const menuItems: MenuItem[] = data.data.result.menuItems;
</script>

<div class="app">
	<Header {menuItems} />

	<main>
		<slot />
	</main>
</div>

<style>
</style>
