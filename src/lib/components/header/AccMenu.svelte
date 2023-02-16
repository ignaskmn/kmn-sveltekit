<script lang="ts">
	import Lang from './Lang.svelte';
	import Hearing from './Hearing.svelte';
	import Sight from './Sight.svelte';

	export let height: number = 2.7;
</script>

<ul>
	<li>
		<Lang {height} />
	</li>
	<li>
		<Hearing {height} />
	</li>
	<li>
		<Sight {height} />
	</li>
</ul>

<style>
	ul {
		flex-grow: 1;
		flex-basis: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
		padding: 0;
	}

	li {
		list-style: none;
	}

	@media (max-width: 567px) {
		ul {
			flex-direction: column;
			position: fixed;
			gap: 0.75rem;
			bottom: 0;
			right: 1rem;
		}
	}
</style>
