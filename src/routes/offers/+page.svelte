<div class="header">
	<h1>Zaglądnij <br /> do mojego menu.</h1>
</div>
<section class="container">
	<div class="offer" style="background-color: #F8C7CC;" id="offer_1">
		<h2>Pakiet szkoleń dla Liderów i Menedżerów</h2>
		<span>W tych warsztatach pracujemy nad:</span>
		<ul>
			<li>rola Lidera</li>
			<li>Przywództwo sytuacyjne</li>
			<li>budowanie zespołu</li>
			<li>dysfunkcje pracy zespołowej</li>
			<li>informacja zwrotna</li>
			<li>komunikacja</li>
			<li>praca na celach</li>
			<li>mechanizmy konfliktu</li>
			<li>procesy zmiany</li>
			<li>motywowanie</li>
			<li>stres pod kontrolą</li>
			<li>organizacja pracy</li>
			<li>budowanie zaufanie</li>
			<li>delegowanie</li>
		</ul>
	</div>
</section>
<section class="container">
	<div
		class="offer"
		style="background-color: #466060; align-content:flex-end; color:white;"
		id="offer_2"
	>
		<h2>Wzmacnianie efektywności</h2>
		<span>W tych warsztatach skupiamy się na:</span>
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
</section>
<section class="colored--wide" style="background-color: #D9D9D9;">
	<div class="container" style="min-height: 523px">
		<div class="custom">
			<h2>Szukasz innego szkolenia?</h2>
			<a href="/contact" class="custom__button"> SKONTAKTUJ SIĘ ZE MNĄ </a>
		</div>
	</div>
</section>
<section class="container">
	<div class="offer" id="offer_3">offer_3</div>
</section>
<section class="container">
	<div class="offer" id="offer_4">offer_4</div>
</section>

<style lang="scss">
	@import '../../lib/styling/style.scss';

	.header {
		width: 1064px;
		margin-left: auto;
		margin-right: auto;
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

	.colored--wide {
		width: 100vw;
		overflow-x: hidden;
	}

	.custom {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		padding: 40px;
		&__button {
			@include button-big;
			color: #d9d9d9;
			letter-spacing: 0.055em;
			text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(87, 87, 87, 0.5);
			box-shadow: -11px 11px 22px rgba(184, 184, 184, 0.2), 11px -11px 22px rgba(184, 184, 184, 0.2),
				-11px -11px 22px rgba(250, 250, 250, 0.9), 11px 11px 28px rgba(184, 184, 184, 0.9),
				inset 1px 1px 2px rgba(250, 250, 250, 0.3), inset -1px -1px 2px rgba(184, 184, 184, 0.5);
			background: linear-gradient(135deg, #e4e4e4 0%, #cecece 100%);
			margin-top: 40px;
			transition: 0.3s ease-in-out;
			&:hover {
				box-shadow: 1px 1px 2px rgba(247, 247, 247, 0.3), -1px -1px 2px rgba(187, 187, 187, 0.5),
					inset -13px 13px 26px rgba(187, 187, 187, 0.2),
					inset 13px -13px 26px rgba(187, 187, 187, 0.2),
					inset -13px -13px 26px rgba(247, 247, 247, 0.9),
					inset 13px 13px 33px rgba(187, 187, 187, 0.9);
					color: rgba(69, 201, 65, 0.637);
					text-shadow: none;
			}
		}
		h2 {
			@include h2;
		}
	}

	.offer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		min-height: 503px;
		border-radius: 25vmin;
		box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);

		> h2 {
			@include h2;
			margin: 90px 40px 40px 90px;
		}

		span,
		ul {
			font-family: DMSans-Regular, sans-serif;
			margin: 0 30px;
		}

		> ul {
			display: flex;
			flex-direction: column;
			list-style-type: none;
			gap: 2px;
			> li {
				&:hover {
					color: grey;
				}
			}
		}
	}
</style>
