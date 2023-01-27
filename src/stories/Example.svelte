<script lang="ts">
    export let primary = false;
    export let label: string = '';

    export let size: 'small' | 'large' | 'normal' = 'normal';
    $: mode = primary ? 'primary' : 'secondary';



</script>

<div class="example">
    <h1 class={[`example-${size}`, mode].join(' ')}>{label}</h1>
</div>

<style>
    .primary {
        color: red;
    }

    .secondary {
        color: black;
    }

    .example-large {
        font-size: 2rem;
    }

    .example-small {
        font-size: 0.75rem;
    }

</style>
