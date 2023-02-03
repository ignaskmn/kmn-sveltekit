<script lang="ts">
	import MenuItem from './MenuItem.svelte';

	export let menuItems = [
		{ slug: 'about', label: 'About' },
		{ slug: 'contact', label: 'Contact' },
		{ slug: 'blog', label: 'Blog' }
	];

	export let isOpen: boolean = true;
</script>

<ul class={isOpen ? 'visible' : 'hidden'}>
	{#each menuItems as item}
		<MenuItem label={item.label} slug={item.slug} />
	{/each}
</ul>

<style>
	ul {
		position: absolute;
		top: 100%;
		left: 0;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		background-color: var(--color-bg-0);
	}

	.visible {
		display: inline-block;
	}

	.hidden {
		display: none;
	}

	@media (max-width: 960px) {
		ul {
			position: relative;
			width: 200px;
			transform: translateX(135%);

			transition: transform 0.3s ease-in-out;
		}

		.hidden {
			/* display: flex; */
		}

		.visible {
			transform: translateX(0);
		}
	}
</style>
