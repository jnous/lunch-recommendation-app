<script>
     export let searchName;
</script>
<div>
    <input bind:value={searchName} type="text" placeholder="Restaurant name">
</div>

<style>
    input {
        width: 100%;
        font-size: large;
        padding: 0.5rem;
    }
</style>