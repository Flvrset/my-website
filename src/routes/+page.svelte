<script>
	let a = 1;

	function func() {
		a++;
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="divers">
    <span> testing </span>
	<button on:click={func}>{a}</button>
</div>

<style>
	.divers {
		background-color: lightblue;
        display: flex;
        border-radius: 8px;
        width: auto;
        justify-content: center;
	}
</style>
