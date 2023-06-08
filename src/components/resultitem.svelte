<script>
    export let restaurantItem;

    function scoreColor(score) {
        if (score >= 90) {
            return "green";
        }
    }


</script>

<div class="resultitem">
    <h1>{restaurantItem.tags.name}</h1>
    {#if restaurantItem.tags.cuisine}
        <p>{restaurantItem.tags.cuisine}</p>
    {/if}
    <address>{restaurantItem.tags['addr:street']} {restaurantItem.tags['addr:housenumber']}</address>
</div>

<style>
    .resultitem {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background: rgb(230, 230, 230);
    }
    :global(.resultitem + .resultitem) {
        margin-top: 1rem;
    }
</style>