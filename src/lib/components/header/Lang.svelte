<script lang="ts">
	export let height: number = 2.5;
</script>

<div
	class="border"
	style="height: {`${height}rem`}; line-height: {`${height}rem`}; width: {`${height}rem`}"
>
	<div class="lang">EN</div>
</div>

<style>
	.border {
		text-align: center;
		color: var(--color-primary);
		cursor: pointer;
		border-style: solid;
		border-width: 1px;
		border-color: var(--color-primary);
		border-radius: 50%;
		display: inline-block;
		width: 2.5rem;
		height: 2.5rem;
		line-height: 2.5rem;
	}

	.lang {
		font-size: 1.2rem;
		font-weight: 600;
	}
</style>
