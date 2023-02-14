<script lang="ts">
	import Obiekt from '$lib/components/object.svelte';
	import '../static/fonts/fonts.css';
</script>

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
	<div class="about">
		<div class="about__top">
			Pracować mądrzej,<br /> uwalniać od absurdu.
		</div>
		<div class="about__bottom">
			Jestem Trenerem wewnętrznym. Samodzielnie stworzyłam autorską koncepcję rozwoju Pracowników
			back office w organizacji. Skonstruowałam i prowadzę własne szkolenia wewnętrzne z
			umiejętności miękkich w różnych obszarach, w tym cykl warsztatów dla Liderów. Moderując
			spotkania wspieram zespoły w podejmowaniu decyzji i wychodzeniu z impasu. Koordynuję kursy
			zewnętrzne.
		</div>
	</div>
</section>
<section style="background-color: #466060;">
	<div class="container" style="height: 702px;">
		<div class="cert">
			<div class="cert__top">Certyfikaty</div>
			<div class="cert__bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste nobis architecto exercitationem officiis beatae possimus nostrum fugiat culpa consequuntur consequatur, sapiente deleniti expedita. Unde fugiat consequuntur eos optio reiciendis.</div>
		</div>
	</div>
</section>
<section class="container" id="experience">Doświadczenie</section>
<section class="container" id="contact">kontakt</section>
<Obiekt />

<style lang="scss">
	@import '../lib/styling/style.scss';
	.hero {
		display: flex;
		flex-direction: column;
		&__top {
			@include h1();
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
				@include button;
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

	.about {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 658px;
		width: 100%;
		background: #0e0f19;
		box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);
		border-radius: 234px;
		color: white;
		gap: 50px;

		&__top {
			@include h2;
			margin-left: 90px;
		}

		&__bottom {
			font-family: DMSans-Regular, sans-serif;
			margin: 0 90px 135px 90px;
		}
	}
	.cert {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		color: white;
		gap: 20px;
		&__top {
			@include h2;
		}
		&__bottom {
			font-family: DMSans-Regular, sans-serif;
			margin: 15px auto 90px auto;
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
		max-width: calc(100% - 20px);
	}
</style>
