<div class="header">
	<h1>Zaglądnij <br/> do mojego menu.</h1>
</div>
<section class="container">
	<div class="offer_1" id="offer_1">offer_1</div>
</section>
<section class="container">
	<div class="offer_2" id="offer_2">offer_2</div>
</section>
<section class="container">
	<div class="offer_3" id="offer_3">offer_3</div>
</section>
<section class="container">
	<div class="offer_4" id="offer_4">offer_4</div>
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
</style>
