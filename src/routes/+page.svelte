<script lang="ts">
    import Resultitem from "../components/resultitem.svelte";
    import Resultlist from "../components/resultlist.svelte";
    import Searchbar from "../components/searchbar.svelte";
    export let searchName
    const shabbuHouse = {
        restaurantName: "Shabu House",
        score: 90,
        description: "Nice place",
        address: "123 Fake Street"
    }
    const restaurantItems = [
        shabbuHouse,
        {
            restaurantName: "Factory",
            score: 50,
            description: "Typical place",
            address: "123 Fake Street"
        }
    ]
</script>
<div class="container">
    <h1>Welcome to Lunch App</h1>

    <Searchbar bind:searchName={searchName}/>
    <Resultlist searchCriteria={searchName} restaurantItems={restaurantItems}/>
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