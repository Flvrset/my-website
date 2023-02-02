<script lang="ts">
	import Hero from '$lib/assets/hero.jpg';

	function scrollIntoView({ target }: any) {
		const element = document.querySelector(target.getAttribute('href'));
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<nav>
	<ul class="navbar">
		<a href="#hero" on:click|preventDefault={scrollIntoView}>Home</a>
		<a href="#about-me" on:click|preventDefault={scrollIntoView}>O mnie!</a>
		<a href="#experience" on:click|preventDefault={scrollIntoView}>Doświadczenie</a>
		<a href="#contact" on:click|preventDefault={scrollIntoView}>Kontakt</a>
	</ul>
</nav>
<section class="container" id="hero">
	<div class="hero">
		<div class="hero__about--top">Joanna Kominiak</div>
		<div class="hero__image">
			<img src={Hero} style="size: 2px;" alt="hero" />
		</div>
	</div>
</section>
<section class="container aboutme" id="about-me">o mnie</section>
<section class="container" id="experience">Doświadczenie</section>
<section class="container" id="contact">kontakt</section>

<style lang="scss">
	:global(body) {
		display: contents;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	nav {
		position: fixed;
		top: 43vh;

		.navbar {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			gap: 20px;

			a {
				color: black;
				font-weight: 400;
				text-decoration: none;

				&:hover {
					transform: scale(1.5);
					transition: transform 30ms ease-in-out;
				}
			}
		}
	}
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;

		&__about {
			&--top {
				font-size: 50px;
			}
		}
		img {
			width: 500px;
			border-radius: 8px;
		}
	}

	.aboutme {
		height: 100vh;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
		padding-left: 15px;
		padding-right: 15px;
		margin-left: auto;
		margin-right: auto;
		height: 100vh;
	}
</style>
