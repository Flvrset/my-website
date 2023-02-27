<script>
	import '../../static/fonts/fonts.css';
</script>

<div class="contact">
	<h1><span>🚧</span>Strona w trakcie pracy <span>🚧</span></h1>
	<div>Jeśli masz jakieś pytania - skontaktuj się ze mną pod adresem mailowym: <br /><b> kominiakpoczta@gmail.com</b></div>
</div>

<style lang="scss">
	@import '../../lib/styling/style.scss';
	.contact {
		display: flex;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		align-content: center;
		> h1 {
			@include h2;
            display: flex;
            align-items: center;
		}
		> div {
			font-family: DMSans-Medium, sans-serif;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
