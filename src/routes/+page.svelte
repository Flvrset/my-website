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
		<a href="#about-me" style="margin-left: 30px" on:click|preventDefault={scrollIntoView}
			>O mnie!</a
		>
		<a href="#experience" style="margin-left: 30px" on:click|preventDefault={scrollIntoView}
			>Doświadczenie</a
		>
		<a href="#contact" on:click|preventDefault={scrollIntoView}>Kontakt</a>
	</ul>
</nav>
<section class="container" id="hero">
	<div class="hero">
		<div class="hero__about">
			<span class="hero__about--top">Joanna Kominiak</span>
			<span class="hero__about--bottom"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
			>
		</div>
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
		top: 35vh;

		.navbar {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			gap: 60px;

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
			display: flex;
			flex-direction: column;
			gap: 15px;
			&--top {
				font-family: Ivar Text, sans-serif;
				font-weight: 600;
				font-size: 70px;
				letter-spacing: -0.2px;
			}
			&--bottom {
				font-family: 'DM Sans', sans-serif;
				font-weight: 400;
			}
		}
		img {
			width: 200px;
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

		width: 800px;
		padding-left: 15px;
		padding-right: 15px;
		margin-left: auto;
		margin-right: auto;
		height: 100vh;
	}

	@font-face {
		font-family: 'Ivar Text';
		src: url('//db.onlinewebfonts.com/t/22aff4497483f2c6a5e001453850b935.eot');
		src: url('//db.onlinewebfonts.com/t/22aff4497483f2c6a5e001453850b935.eot?#iefix')
				format('embedded-opentype'),
			url('//db.onlinewebfonts.com/t/22aff4497483f2c6a5e001453850b935.woff2') format('woff2'),
			url('//db.onlinewebfonts.com/t/22aff4497483f2c6a5e001453850b935.woff') format('woff'),
			url('//db.onlinewebfonts.com/t/22aff4497483f2c6a5e001453850b935.ttf') format('truetype'),
			url('//db.onlinewebfonts.com/t/22aff4497483f2c6a5e001453850b935.svg#Ivar Text Hydro')
				format('svg');
	}
	@font-face {
		font-family: 'DM Sans';
		src: url('//db.onlinewebfonts.com/t/d9d77150b3dda1eea88a7a8f979e7711.eot');
		src: url('//db.onlinewebfonts.com/t/d9d77150b3dda1eea88a7a8f979e7711.eot?#iefix')
				format('embedded-opentype'),
			url('//db.onlinewebfonts.com/t/d9d77150b3dda1eea88a7a8f979e7711.woff2') format('woff2'),
			url('//db.onlinewebfonts.com/t/d9d77150b3dda1eea88a7a8f979e7711.woff') format('woff'),
			url('//db.onlinewebfonts.com/t/d9d77150b3dda1eea88a7a8f979e7711.ttf') format('truetype'),
			url('//db.onlinewebfonts.com/t/d9d77150b3dda1eea88a7a8f979e7711.svg#DM Sans') format('svg');
	}
</style>
