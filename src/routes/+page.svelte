<script lang="ts">
	import Obiekt from '$lib/components/object.svelte';
	import '../static/fonts/fonts.css';
</script>

<section class="container">
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
<section class="container">
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
			<div class="cert__bottom">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste nobis architecto
				exercitationem officiis beatae possimus nostrum fugiat culpa consequuntur consequatur,
				sapiente deleniti expedita. Unde fugiat consequuntur eos optio reiciendis.
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="experience">
		<div>
			<div class="experience__head">
				<div class="experience__head--number">1200</div>
				<div class="experience__head--bottom">Wyszkolonych pracowników</div>
			</div>
			<div class="experience__content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea dignissimos. Minima beatae doloremque magni id dolorem cumque itaque illum eveniet sequi placeat esse recusandae, dolor vero ad. Possimus, maxime!
			</div>
		</div>
		<div>
			<div class="experience__head">
				<div class="experience__head--number">140</div>
				<div class="experience__head--bottom">Przeprowadzonych szkoleń</div>
			</div>
			<div class="experience__content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea dignissimos. Minima beatae doloremque magni id dolorem cumque itaque illum eveniet sequi placeat esse recusandae, dolor vero ad. Possimus, maxime!
			</div>
		</div>
		<div>
			<div class="experience__head">
				<div class="experience__head--number">9</div>
				<div class="experience__head--bottom">lat doświadczenia</div>
			</div>
			<div class="experience__content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ea dignissimos. Minima beatae doloremque magni id dolorem cumque itaque illum eveniet sequi placeat esse recusandae, dolor vero ad. Possimus, maxime!
			</div>
		</div>
	</div>
</section>
<section class="container">kontakt</section>
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
		border-radius: 25vmin;
		color: white;
		gap: 50px;

		&__top {
			@include h2;
			margin: 40px 0 0 90px;
		}

		&__bottom {
			font-family: DMSans-Regular, sans-serif;
			margin: 0 90px 135px 90px;
		}
	}
	.cert {
		margin-left: 50px;
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
	.experience {
		display: flex;
		height: 100%;
		width: 100%;
		gap: 20px;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin-top: 90px;
		> div {
			height: 617px;
			background-color: #0e0f19;
			color: white;
			border-radius: 10vmin;
			flex: 1 1 0px;
			padding: 0 50px 0 50px;
			box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);
		}
		&__head {
			display: flex;
			flex-direction: column;
			align-items: center;
			&--number {
				margin-top: 63px;
				font-size: 40px;
				font-family: ClashDisplay-Semibold, sans-serif;
			}
			&--bottom {
				font-family: ClashDisplay-Light, sans-serif;
				font-size: 17px;
			}
		}
		&__content {
			text-align: justify;
			text-justify: auto;
			margin: 40px auto;
			font-family: DMSans-Regular, sans-serif;
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
