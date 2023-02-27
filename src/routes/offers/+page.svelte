<script lang="ts">
	import '../../static/fonts/fonts.css';
	import offer1 from '../../lib/images/offer1.png';
	import pencil from '../../lib/images/pencil-with-eraser.png';
	import yoga from '../../lib/images/person-doing-yoga-outdoors 1.png';
	let scroll: number;
	let speed = 0.2;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="header">
	<h1>Zaglądnij <br /> do mojego menu.</h1>
</div>
<section class="container">
	<div class="offer-with-image">
		<img
			draggable="false"
			src={offer1}
			style:transform={`translateY(${scroll * -1 * speed}px)`}
			alt="offer_1"
		/>
		<div class="offer offer__first" style="background-color: #EB5E28; color: white;" id="offer_1">
			<h2>Wzmacnianie Efektywności</h2>
			<span>W tych warsztatach skupiam się na:</span>
			<div class="offer--list">
				<ul>
					<li>praca pod presją czasu</li>
					<li>automotywacja</li>
					<li>komunikacja z informacją zwrotną</li>
					<li>funkcjonowanie w zespole</li>
					<li>kontakt poprzez korespondencję</li>
					<li>praca z nawykiem</li>
					<li>współpraca i czerpanie z różnorodności</li>
					<li>budzenie pasji</li>
					<li>troska o klienta w design thinking</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="offer offer__second" style="background-color: #CCC5B9;" id="offer_2">
		<h2>Pakiet szkoleń dla Liderów i Menedżerów</h2>
		<span>W tych warsztatach pracujemy nad:</span>
		<div class="offer--list">
			<ul>
				<li>rola Lidera</li>
				<li>Przywództwo sytuacyjne</li>
				<li>budowanie zespołu</li>
				<li>dysfunkcje pracy zespołowej</li>
				<li>informacja zwrotna</li>
				<li>komunikacja</li>
				<li>praca na celach</li>
			</ul>
			<ul>
				<li>mechanizmy konfliktu</li>
				<li>procesy zmiany</li>
				<li>motywowanie</li>
				<li>stres pod kontrolą</li>
				<li>organizacja pracy</li>
				<li>budowanie zaufania</li>
				<li>delegowanie</li>
			</ul>
		</div>
	</div>
</section>
<section class="colored--wide" style="background-color: #252422;">
	<div class="container" style="min-height: 693px; display: block;">
		<div class="custom">
			<h2>Szukasz<br />innego<br />szkolenia?</h2>
			<a href="/contact"> SKONTAKTUJ SIĘ ZE MNĄ </a>
			<img draggable="false" alt="yoga" src={yoga} />
		</div>
	</div>
</section>
<section class="container">
	<div class="offer offer__third" id="offer_3">
		<h2>Train the Trainer<br />szlifowanie kunsztu</h2>
		<span>Celem tych warsztatów jest nauczenie:</span>
		<ul>
			<li>konstruowanie wsadu szkoleń</li>
			<li>kontraktowanie</li>
			<li>kunszt uczenia osób dorosłych</li>
			<li>fazy życia grupy</li>
			<li>trudny uczestnik</li>
			<li>luźne stałe elementy spotkań</li>
			<li>podsumowania i pomosty w przyszłość</li>
			<li>obawy i nadzieje Trenera</li>
		</ul>
	</div>
	<img
		draggable="false"
		src={pencil}
		style="position: relative; width: 503px; top: 151px; left: 285px;"
		alt="pencil"
	/>
</section>
<section class="container">
	<div class="offer offer__fourth" id="offer_4">
		<h2>Konstruowanie i podpinanie pracowników organizacji pod misję, wizję i wartości.</h2>
	</div>
</section>
<div style:transform={`translateY(${scroll * -1 * speed + 150}px)`} class="gradient" />
<section class="container">
	<div class="offer offer__fifth" id="offer_4">
		<h2>Gdy wiedza jest w zespole...</h2>
		<span
			>Dużą część potrzeb grupy jesteśmy w stanie spełnić właściwie moderując spotkania. Wtedy
			przyjmuję rolę Facylitatora i prowadzę uczestników w taki sposób, by zbliżyli się do swojego
			celu i osiągnęli go. Każde takie spotkanie konstuuję indywidualnie w zależności od wyzwania po
			jego uczestników.</span
		>
		<ul>
			<li>budowanie strategii</li>
			<li>usprawnianie procesów</li>
			<li>wzmacnianie komunikacji</li>
			<li>rozwiązywanie konfliktów</li>
			<li>budowanie zespołów</li>
		</ul>
	</div>
</section>
<section class="container">
	<div class="contact">
		<h1>Coś przyciągnęło twoją uwagę?</h1>
		<a href="/contact">SKONTAKTUJ SIĘ ZE MNĄ</a>
	</div>
</section>

<style lang="scss">
	@import '../../lib/styling/style.scss';

	.header {
		padding: 0 50px;
		max-width: calc(100% - 20px);
		h1 {
			@include h1;
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
		min-height: 80vh;
		max-width: calc(100% - 20px);
	}

	.offer-with-image {
		display: flex;
		position: absolute;
		align-items: center;
		> img {
			border-radius: 172px;
			position: relative;
			left: 81px;
			width: 540px;
			height: 485px;
		}
	}

	.colored--wide {
		width: 100vw;
		overflow-x: hidden;
	}

	.custom {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: #ccc5b9;
		position: absolute;
		> h2 {
			font-family: ClashDisplay-Medium;
			font-size: 96px;
			margin-top: 50px;
			margin-bottom: 80px;
			line-height: 81%;
		}
		> a {
			@include button;
			background-color: #eb5e28;
			width: 428px;
			height: 117px;
			font-size: 20px;
			letter-spacing: 0.055em;
			position: relative;
			z-index: 1;
			transition: 0.2s ease-in-out;

			&:hover {
				transform: scale(1.05);
				transition: 0.2s ease-in-out;
			}
		}
		img {
			width: 910px;
			position: relative;
			bottom: 376px;
			left: 216px;
		}
	}

	.offer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 108px;
		box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);

		h2,
		span,
		ul {
			margin-left: 90px;
			margin-right: 90px;
		}

		span,
		ul {
			font-family: DMSans-Regular, sans-serif;
		}
		span {
			font-size: 32px;
		}

		h2 {
			@include h2;
			margin-bottom: 15px;
			margin-top: 50px;
		}
		ul {
			font-size: 24px;
		}

		&__first {
			min-height: 621px;
			max-width: 608px;
		}
		&__second {
			min-height: 621px;
			max-width: 1064px;
			margin-bottom: 100px;
		}
		&__third {
			max-width: 1064px;
			min-height: 555px;
			background-color: #fffcf2;
			position: absolute;
		}
		&__fourth {
			min-height: 519px;
			background-color: #0e0f19;
			color: #fffcf2;
			h2 {
				margin-top: 0;
			}
		}

		&__fifth {
			min-height: 550px;
			background-color: #ccc5b9;
			span {
				font-size: 24px;
			}
			ul {
				margin-bottom: 70px;
			}
		}
		&--list {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 70px;
		}
	}
	.gradient {
		position: absolute;
		z-index: -1;
		background: url('../../lib/images/mesh-gradient.png');
		width: 1203px;
		height: 950px;
		border-radius: 105px;
		text-align: center;
		background-size: cover;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}

	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			@include h1;
		}

		a {
			@include button;
			background-color: #eb5e28;
			width: 428px;
			height: 117px;
			font-size: 20px;
			letter-spacing: 0.055em;
			transition: 0.2s ease-in-out;

			&:hover {
				transform: scale(1.05);
				transition: 0.2s ease-in-out;
			}
		}
	}
</style>
