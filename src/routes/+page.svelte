<script lang="ts">
	import Obiekt from '$lib/components/object.svelte';
	import '../static/fonts/fonts.css';

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
		<div class="hero__top">Joanna Kominiak</div>
		<div class="hero__bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
		<div class="hero__buttons">
			<a class="hero__buttons--contact" href="/contact">SKONTAKTUJ SIĘ ZE MNĄ</a>
			<a class="hero__buttons--offers" href="/offers">ZOBACZ MOJĄ OFERTĘ</a>
		</div>
		<div class="hero__image" />
	</div>
</section>
<section class="container" id="about-me">
	<div class="aboutme">
		<div class="aboutme__top">
			Pracować mądrzej,<br/> uwalniać od absurdu.
		</div>
	</div>
</section>
<section class="container" id="experience">Doświadczenie</section>
<section class="container" id="contact">kontakt</section>
<Obiekt />

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
				cursor: default;

				&:hover {
					transform: scale(1.5);
					transition: transform 30ms ease-in-out;
				}
			}
		}
	}
	.hero {
		display: flex;
		flex-direction: column;
		&__top {
			font-family: ClashDisplay-Medium, sans-serif;
			font-weight: 500;
			font-size: 6em;
			letter-spacing: -0.2px;
		}
		&__bottom {
			font-family: DMSans-Regular, sans-serif;
			font-weight: 400;
			font-size: 1.125em;
			letter-spacing: 0.015rem;
			line-height: 23px;
		}
		&__buttons {
			display: flex;
			gap: 16.55px;
			margin-top: 23px;
			a {
				font-family: ClashDisplay-Medium, sans-serif;
				color: white;
				width: 253px;
				height: 68px;
				border-radius: 113px;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				cursor: pointer;
			}
			&--contact {
				display: flex;
				background: #81a684;
				letter-spacing: 0.065em;
				font-size: 0.875em;
			}
			&--offers {
				display: flex;
				background: #466060;
				letter-spacing: 0.07em;
				font-size: 0.9375em;
			}
		}
	}

	.aboutme {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 658px;
		width: 100%;
		background: #0E0F19;
		box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);
		border-radius: 234px;

		&__top {
			font-family: ClashDisplay-Medium, sans-serif;
			color: white;
			font-size: 64px;
			margin-left: 90px;
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 1064px;
		margin-left: auto;
		margin-right: auto;
		height: 100vh;
	}
</style>
