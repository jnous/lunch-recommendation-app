<script>
    import Resultitem from "../components/resultitem.svelte";
    export let restaurantItems;
    export let searchCriteria;
</script>


<div class="resultlist">
    {#each restaurantItems as restaurantItem}
        {#if restaurantItem.restaurantName.toLowerCase().includes(searchCriteria?.toLowerCase())}
            <Resultitem restaurantItem={restaurantItem}></Resultitem>
        {:else if !searchCriteria}
            <Resultitem restaurantItem={restaurantItem}></Resultitem>
        {/if}
    {/each}
</div>

<style>
    .resultlist { 
        margin-top: 2rem;
    }
</style>