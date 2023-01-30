<script lang="ts">
    import NavItem from "./NavItem.svelte";

    const navItems = [
        { href: "about", label: "About" },
        { href: "contact", label: "Contact" },
        { href: "blog", label: "Blog" },
    ];

</script>

<ul>
    {#each navItems as navItem}
        <NavItem href={navItem.href} label={navItem.label} />
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        display: inline-block;
    }
</style>