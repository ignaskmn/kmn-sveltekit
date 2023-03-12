<script lang="ts">
	import Arrow from './Arrow.svelte';

	export let heading: string = 'Veiklos / Koncerto pavadinimas';
	export let description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor error consequuntur facere vero itaque sunt, nulla et neque architecto qui ipsa quasi reiciendis quisquam odio impedit cumque iure. Porro?'
	
	let	isOpen: boolean = false;

	function getDescriptionHeight() {
		const descriptionElement = document.querySelector('.description-container') as HTMLElement;
		const height = descriptionElement.scrollHeight;
		return height
	}
</script>

<div class="collapse-container">
	<button class="heading-container" on:click={() => isOpen = !isOpen}>
		<h2>{heading}</h2>
		<Arrow height={6.25} isOpen={isOpen}/>
	</button>
	<div class="description-container" style="height: {isOpen ? `${getDescriptionHeight()}px` : "0px"}">
		<p>{description}</p>
	</div>
</div>

<style>
	.heading-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		text-align: left;
		cursor: pointer;
		background-color: var(--color-bg-0);
		border: none;
		margin: 0;
	}

	h2 {
		margin: 0;
	}

	.description-container {
		/* display: block; */
		margin: 0;
		width: 100%;
		overflow: hidden;

		transition: height 0.3s ease-in-out;
	}

	/* .arrow {
		font-size: 1.5rem;
	} */
</style>
