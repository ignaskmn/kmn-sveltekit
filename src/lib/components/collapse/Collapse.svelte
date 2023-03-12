<script lang="ts">
	import Arrow from './Arrow.svelte';

	export let heading: string = 'Veiklos / Koncerto pavadinimas';
	export let description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolor error consequuntur facere vero itaque sunt, nulla et neque architecto qui ipsa quasi reiciendis quisquam odio impedit cumque iure. Porro?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, laudantium? Deleniti dolor impedit quia alias nobis! Fugit voluptate dolor libero laborum tempora, illo obcaecati minus dignissimos porro inventore nesciunt iste.'
	export let type: 'person' | 'event' = 'event';
	export let firstName: string = 'vardenė'
	export let lastName: string = 'pavardenis'
	export let nationality: string = 'US'
	let	isOpen: boolean = false;

	function getHeadingHeight() {
		const headingElement = document.querySelector('.heading-container') as HTMLElement;
		const height = headingElement.scrollHeight;
		return height
	}

	function getDescriptionHeight() {
		const descriptionElement = document.querySelector('.description-container') as HTMLElement;
		const height = descriptionElement.scrollHeight;
		return height
	}


</script>

<div class="collapse-container">
	<button class="heading-container {type}" on:click={() => isOpen = !isOpen}>
		<div class="heading-text">
			{#if type === 'event'}
				<h2>{heading}</h2>
			{/if}
			{#if type === 'person'}
				<h2>{firstName}</h2>
				<h2>{lastName}</h2>
				<h3>({nationality})</h3>
			{/if}
		</div>
		<Arrow height={6.25} isOpen={isOpen}/>
	</button>
	<div class="description-container" style="height: {isOpen ? `${getDescriptionHeight()}px` : "0px"}">
		<p>{description}</p>
	</div>
</div>
<div class="content">Content</div>

<style>
	.heading-container {
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		text-align: left;
		cursor: pointer;
		background-color: var(--color-bg-0);
		border: none;
		margin: 0;
	}
	
	.heading-text {
		display: flex;
		flex-direction: column;
	}

	.person h2 {
		margin: 0;
		font-size: 2rem;	
	}
	
	.person h3 {
		margin: 0;
		font-size: 1.5rem;
	}

	h2 {
		margin: 0;
	}

	.description-container {
		margin: 0;
		overflow: hidden;

		transition: height 0.3s ease-in-out;
	}

	.content {
		background-color: aqua;
	}

</style>
