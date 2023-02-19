<div class="header">
	<h1>Zaglądnij <br/> do mojego menu.</h1>
</div>
<section class="container">
	<div class="offer" id="offer_1">
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
	<div class="offer" id="offer_2">offer_2</div>
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
		min-height: 100vh;
		max-width: calc(100% - 20px);
	}

	.offer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: pink;
		width: 100%;
		min-height: 503px;
		border-radius: 25vmin;
		box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);

		> h2 {
			@include h2;
			margin: 90px 40px 0 90px;
		}
		
		span, ul {
			font-family: DMSans-Regular, sans-serif;
		}

		> ul {
			display: flex;
			flex-direction: column;
			list-style-type: none;
			> li:hover {
				color: grey;
			}
		} 
	}
</style>
