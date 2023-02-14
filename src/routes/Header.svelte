<script>
	import Menu from "../lib/components/header/Menu.svelte";
	import Logo from "../lib/components/header/Logo.svelte";
	import Burger from "../lib/components/header/Burger.svelte";
</script>

<header>
	<Burger />
	<Logo />
	<Menu />
	<span>Acc</span>
</header>
<p>Content</p>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

</style>
