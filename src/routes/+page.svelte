<script lang="ts">
	import Obiekt from '$lib/components/object.svelte';
	import '../static/fonts/fonts.css';
</script>

<section class="container">
	<div class="hero">
		<h1>Joanna Kominiak</h1>
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
		<h2 class="about__top">
			Pracować mądrzej,<br /> uwalniać od absurdu...
		</h2>
		<div class="about__top--addon">
			dostrzegać sens i robić coś po coś, dlaczegoś. Zatrzymywać się, oddalać perspektywę i budzić
			świadomość.<br /> Zarażać pasją. To cała ja.
		</div>
		<div class="about__bottom">
			Jestem Trenerem z dziesięcioletnim doświadczeniem w biznesie. Tworzyłam autorską koncepcję
			rozwoju Pracowników w organizacji. Specjalizuję się w konstruowaniu i prowadzeniu szkoleń i
			warsztatów z umiejętności miękkich w różnych obszarach i na różnych poziomach zaawansowania.
			Moderując spotkania wspieram zespoły w podejmowaniu decyzji i wychodzeniu z impasu.
		</div>
	</div>
</section>
<section style="background-color: #466060; width: 100vw; overflow-x: hidden;">
	<div class="container" style="height: 702px;">
		<div class="support">
			<h2>Kogo i jak wspieram?</h2>
			<div>
				<h3>Liderzy i Menedżerowie</h3>
				<a href="/offers">szkolenia i warsztaty</a>
			</div>
			<div>
				<h3>Zespoły i Pracownicy</h3>
				<a href="/offers">moderacja i facylitacja</a>
			</div>
			<div>
				<h3>Trenerzy</h3>
				<a href="/offers">szlifowanie kunsztu</a>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="experience">
		<div>
			<div class="experience__head">
				<div class="experience__head--number">400</div>
				<div class="experience__head--bottom">uczestników szkoleń rocznie</div>
			</div>
			<div class="experience__content">
				Na sali szkoleniowej online i stacjonarnie goszczę różnych uczestników. Chętnie pracuję ze
				sprzedawcami, pracownikami back office i całymi zespołami. Wspieram przełożonych. Dzielę się
				wiedzą z trenerami, moderatorami i facylitatorami. Doceniam multidyscyplinarne grupy
				warsztatowe, dążę na sali do efektu synergii, czerpania od siebie i wspierania się nawzajem.
			</div>
		</div>
		<div>
			<div class="experience__head">
				<div class="experience__head--number">300</div>
				<div class="experience__head--bottom">godzin warsztatów rocznie</div>
			</div>
			<div class="experience__content">
				Fundamentem moich warsztatów jest cykl uczenia się osób dorosłych. Dlatego doświadczanie,
				refleksja jest kluczowa dla ugruntowania teorii i pragmatyki. Dbam o interakcję, aktywność i
				współudział. Głęboko wierzę w kontrakt uczestników i zadbanie o komfortową przestrzeń do
				pracy. Sala szkoleniowa jest idealną przestrzenią do swobodnego popełniania błędów, po to,
				by unikać ich w realnych sytuacjach.
			</div>
		</div>
		<div>
			<div class="experience__head">
				<div class="experience__head--number">9</div>
				<div class="experience__head--bottom">lat doświadczenia</div>
			</div>
			<div class="experience__content">
				Ważne, by być wiarygodną. Sądzę, że Trener powinien zarażać pasją, wierzyć w to, co
				przekazuje. Zachowuję neutralność. To uczestnicy spotkania są w centrum, Trener prowadzi
				grupę, wskazuje drogę, przeprowadza przez proces. Uruchamiam wrażliwość. Obserwacja grupy,
				ciekawość, diagnoza jej stanu w każdej części spotkania jest kluczem do stosowania
				odpowiednich narzędzi, nadawania właściwego tempa, podążania za uczestnikami.
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
		h1 {
			@include h1;
			margin: 0;
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
		min-height: 658px;
		height: auto;
		width: 100%;
		background: #0e0f19;
		box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);
		border-radius: 25vmin;
		color: white;

		&__top {
			@include h2;
			font-weight: 100;
			margin: 90px 0 0 90px;

			&--addon {
				font-family: ClashDisplay-Light, sans-serif;
				margin: 10px 90px 50px 90px;
				font-size: 16px;
			}
		}

		&__bottom {
			font-family: DMSans-Regular, sans-serif;
			font-size: 24px;
			margin: 0 90px 135px 90px;
		}
	}
	.support {
		margin-left: 50px;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		color: white;
		gap: 20px;
		> h2 {
			@include h2;
			margin: 0;
		}
		h3 {
			font-family: ClashDisplay-Light, sans-serif;
			font-size: 24px;
			margin-bottom: 0;
		}
		a {
			font-family: ClashDisplay-Bold;
			font-size: 64px;
			color: #486969;
			text-decoration: none;
			&:hover {
				color: whitesmoke;
				transition: 300ms ease;
			}
		}
	}
	.experience {
		display: flex;
		height: 70vh;
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
