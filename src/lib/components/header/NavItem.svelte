<script lang="ts">
   export let href: string = ''; 
   export let label: string = '';
</script>

<li>
    <a href={`/${href}`}>{label}</a>
</li>

<style>
    li {
        font-size: 1.25rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    li a {
        padding: 0.75rem 1.5rem;
        display: inline-block;
    }
</style>