<script>
	import Hero from '$lib/assets/hero.jpg';
</script>

<div class="hero">
	<nav>
		<ul>
			<li>O mnie</li>
			<li>Doświadczenie</li>
			<li>Kontakt</li>
		</ul>
	</nav>
	<div class="container">
		<div class="hero">Joanna Kominiak</div>
		<div class="hero__image"><img src={Hero} style="size: 2px;" alt="hero" /></div>
	</div>
</div>
<section class="aboutme" />

<style>
	:global(body) {
		display: contents;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.hero__image {
		max-width: 10%;
		height: auto;
		border-radius: 8px;
	}
	.hero {
		background-color: whitesmoke;
	}
	.aboutme {
		height: 100vh;
		background-color: aquamarine;
	}
	.container {
		width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
