<script>
	const getRandomUser = async () => {
		var response = await fetch('https://randomuser.me/api/');
		var result = await response.json();
		return result;
	};

	let userPromise = getRandomUser();
</script>

{#await userPromise}
	<h2>Loading...</h2>
{:then users}
	<h2>{users.results[0].name.first}</h2>
{:catch err}
	<h2>xd??</h2>
{/await}
