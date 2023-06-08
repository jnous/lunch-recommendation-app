<script>
	import Resultitem from '../components/resultitem.svelte';
	export let restaurantItems;
	export let searchCriteria;

	function search(data, criteria) {
		if (!criteria) {
			return data;
		}
		return data.filter((item) => {
			return (
				item.tags.name?.toLowerCase().includes(criteria?.toLowerCase()) ||
				item.tags.cuisine?.toLowerCase().includes(criteria?.toLowerCase())
			);
		});
	}
	let items = search();
</script>

<div class="resultlist">
	{#each search(restaurantItems, searchCriteria) as restaurantItem}
		<Resultitem {restaurantItem} />
	{/each}
</div>

<style>
	.resultlist {
		margin-top: 2rem;
	}
</style>
