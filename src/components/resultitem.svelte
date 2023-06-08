<script>
    export let restaurantItem;

    function scoreColor(score) {
        if (score >= 90) {
            return "green";
        }
    }
</script>

<div class="resultitem">
    <h1>{restaurantItem.restaurantName}</h1>
    <p>{restaurantItem.description}</p>
    <p style={"color: " + scoreColor(restaurantItem.score)}>{restaurantItem.score}</p>
    <address>{restaurantItem.address}</address>
</div>

<style>
    h1 {

    }
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