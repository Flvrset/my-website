<script lang="ts">
	import '$lib/fonts/fonts.css';
	import offer1 from '$lib/images/offer1.webp';
	import yoga from '$lib/images/person-doing-yoga-outdoors 1.png';
	import gradient from '$lib/images/mesh-gradient.png';
	let scroll: number;
	let speed = 0.2;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="header wannabe-shown-on-scroll">
	<h1>Zaglądnij <br /> do mojego menu</h1>
</div>
<section class="container wannabe-shown-on-scroll">
	<div class="offer-with-image">
		<img
			draggable="false"
			src={offer1}
			style:transform={`translateY(${scroll * -1 * speed + 60}px)`}
			alt="Wzmacnianie efektywności"
			aria-hidden="true"
			style="position: absolute;"
		/>
		<div class="offer offer__first" style="background-color: #9C3411; color: white;" id="offer_1">
			<h2>Wzmacnianie efektywności</h2>
			<span>w tych warsztatach skupiam się na:</span>
			<div class="offer--list">
				<ul>
					<li>praca pod presją czasu</li>
					<li>automotywacja</li>
					<li>komunikacja z informacją zwrotną</li>
					<li>funkcjonowanie w zespole</li>
					<li>kontakt poprzez korespondencję</li>
					<li>praca z nawykiem</li>
					<li>współpraca</li>
					<li>czerpanie z różnorodności</li>
					<li>budzenie pasji</li>
					<li>troska o klienta w design thinking</li>
					<li>efektywna korespondencja</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section class="container">
	<div class="offer offer__second" style="background-color: #CCC5B9;" id="offer_2">
		<h2>Pakiet szkoleń dla Menedżerów i Liderów</h2>
		<span>w tych warsztatach pracujemy nad:</span>
		<div class="offer--list">
			<ul>
				<li>rola Lidera</li>
				<li>przywództwo sytuacyjne</li>
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
	<div class="container container--custom">
		<div class="custom">
			<h2>Szukasz<br />innego<br />szkolenia?</h2>
			<a href="/contact"> SKONTAKTUJ SIĘ ZE MNĄ </a>
			<img draggable="false" alt="yoga" aria-hidden="true" src={yoga} loading="lazy" />
		</div>
	</div>
</section>
<section class="container wannabe-shown-on-scroll wannabe-shown-on-scroll--left">
	<div class="offer offer__third" id="offer_3">
		<h2>Train the Trainer<br />szlifowanie kunsztu</h2>
		<span>tutaj dzielę się wiedzą:</span>
		<ul>
			<li>budowanie konstrukcji szkolenia</li>
			<li>kontraktowanie</li>
			<li>uczenie się osób dorosłych</li>
			<li>fazy życia grupy</li>
			<li>trudny uczestnik</li>
			<li>rozgrzewkowe stałe elementy spotkań</li>
			<li>podsumowania i pomosty w przyszłość</li>
			<li>obawy i nadzieje Trenera</li>
		</ul>
	</div>
</section>
<section class="container">
	<div class="offer offer__fourth" id="offer_4" style="position: relative;">
		<h2>Konstruowanie i podpinanie pracowników organizacji pod misję, wizję i wartości.</h2>
	</div>
	<img
		alt="gradient"
		aria-hidden="true"
		style:transform={`translateY(${scroll * -1 * speed + 800}px)`}
		class="gradient"
		src={gradient}
		draggable="false"
		loading="lazy"
	/>
</section>
<section class="container wannabe-shown-on-scroll wannabe-shown-on-scroll--right">
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

		width: 100%;
		max-width: 1064px;
		margin: auto;
		min-height: 80vh;

		&--custom {
			min-height: 629px; 
			display: block;
		}
	}

	.offer-with-image {
		display: flex;
		position: relative;
		align-items: center;
		margin-bottom: 40px;
		> img {
			border-radius: 14vmin;
			position: absolute;
			z-index: 1;
			right: 514px;
		}
	}

	.colored--wide {
		width: 100vw;
		overflow: hidden;
		min-height: 680px;
	}

	.custom {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: #ccc5b9;
		position: relative;
		> h2 {
			font-family: ClashDisplay-Medium;
			font-size: 96px;
			margin-top: 50px;
			margin-bottom: 80px;
			line-height: 81%;
		}
		> a {
			@include button;
			background-color: #9C3411;
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
			width: 100%;
			max-width: 910px;
			position: absolute;
			left: 260px;
			top: 51px;
		}
	}

	.offer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 12vmin;
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
			font-size: 24px;
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
			margin-bottom: 30px;
			margin-left: 470px;
		}
		&__second {
			min-height: 621px;
			max-width: 1064px;
			margin-bottom: 100px;
		}
		&__third {
			max-width: 1064px;
			margin-top: 100px;
			padding: 50px 20px;
			background-color: #fffcf2;
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
			justify-content: flex-start;
			margin-bottom: 40px;
			margin-left: 90px;
			margin-right: 90px;
			gap: 20px;
			> ul {
				margin-left: 0;
				margin-right: 0;
			}
		}
	}
	.gradient {
		position: absolute;
		z-index: -1;
		max-width: 1000px;
		width: 100%;
		height: 500px;
		border-radius: 13vmin;
		margin-left: 120px;
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
			background-color: #9C3411;
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
	@media screen and (max-width: 480px) {
		.header {
			padding: 0 10px; /* Reduce horizontal padding */
		}

		.container {
			max-width: 100%;
			min-height: 50vh;

			&--custom {
				min-height: 601px;
			}
		}

		.offer-with-image {
			flex-direction: column;
			margin-bottom: 10px; /* Reduce bottom margin */
			> img {
				position: static;
				transform: none;
				display: none;
			}
		}

		.colored--wide {
			width: 100%;
			overflow-x: hidden;
			min-height: auto;
		}

		.custom {
			align-items: center;
			h2 {
				font-size: 4em;
				margin-top: 40px;
				margin-bottom: 40px; /* Reduce bottom margin */
			}

			a {
				width: 350px;
			}

			img {
				left: 0;
				top: 100%;
			}
		}

		.offer {
			margin-left: 5px;
			margin-right: 5px;
			padding: 10px; /* Reduce padding */

			h2 {
				@include h2;
				margin-top: 15px; /* Reduce top margin */
				margin-bottom: 5px; /* Reduce bottom margin */
			}

			span {
				font-size: 1.25em; /* Reduce font size */
			}

			ul {
				font-size: 16px; /* Reduce font size */
			}
			h2,
			span,
			ul {
				margin: 10px;
			}

			&--list {
				margin-left: 5px;
				margin-right: 0;
				margin-bottom: 10px;
				gap: 0px;
			}

			&__first {
				min-height: 500px;
			}

			&__second {
				min-height: 650px;
				ul {
					margin: 0;
				}
			}

			&__third {
				margin-top: 50px;
				padding: 30px;
			}

			&__fourth {
				margin-top: 50px;
				min-height: 370px;
			}

			&__fifth {
				margin-top: 50px;
				padding: 30px;
			}

			
		}

		.gradient {
			display: none;
		}

		.contact {
			margin-top: 50px;
			margin-bottom: 50px;
			h1 {
				font-size: 3.5em;
				margin: 0 25px 40px 25px;
			}

			a {
				width: 350px;
			}
		}
	}
</style>
