<script lang="ts">
	import Hero from '$lib/assets/hero.jpg';
	9 ? 's' : 'b';
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
		<div class="hero">
			<div class="hero__about--top">Joanna Kominiak</div>
			<div class="hero__image">
				<img src={Hero} style="size: 2px;" alt="hero" />
			</div>
		</div>
	</div>
</div>
<section class="aboutme" />

<style lang="scss">
	:global(body) {
		display: contents;
		margin: 0;
		padding: 0;
		height: 100%;
	}
	img {
		width: 500px;
		border-radius: 8px;
	}

	.hero {
		background-color: whitesmoke;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;

		&__about {
			&--top {
				font-size: 50px;
			}
		}
	}

	.aboutme {
		height: 90vh;
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
