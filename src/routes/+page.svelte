<script lang="ts">
    import Resultitem from "../components/resultitem.svelte";
    import Resultlist from "../components/resultlist.svelte";
    import Searchbar from "../components/searchbar.svelte";
    export let searchName = "";
    export let data
</script>
<div class="container">
    <h1>Welcome to Lunch App</h1>

    <Searchbar bind:searchName={searchName}/>
    <Resultlist searchCriteria={searchName} restaurantItems={data.restaurants}/>
</div>

<style>
    * {
        font-family: sans-serif;
    }
    h1 {
        text-align: center;
    }
    .container {
        display: flex;
        flex-direction: column; 
        max-width: 50vw;
        margin: 0 auto;
    }
</style>