<script lang="ts">
	import { Lottie } from 'lottie-svelte';
	import type { AnimationEvent } from 'lottie-svelte/iface';
	import '../static/icons8-linkedin.json';
	let anim: AnimationEvent;

	function lottie_handler(event: AnimationEvent) {
		anim = event;
	}
</script>

<div class="navbar">
	<a href="/">logo</a>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div class="navbar__hrefs">
		<a href="/contact">kontakt</a>
		<a href="/offers">szkolenia</a>
		<a
			href="https://www.linkedin.com/in/joanna-kominiak-936b33253/"
			target="_blank"
			rel="noreferrer"
			on:mouseover={() => anim.detail.play()}
			on:mouseleave={() => anim.detail.stop()}
		>
			<i style="width:24px;">
				<Lottie
					path="../../src/static/icons8-linkedin.json"
					autoplay={false}
					on:animation={lottie_handler}
				/>
			</i>
		</a>
	</div>
</div>
<slot />

<style lang="scss">
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		position: fixed;
		width: 95vw;
		a {
			text-decoration: none;
			font-family: ClashDisplay-Medium;
			color: black;
			display: flex;
		}

		&__hrefs {
			display: flex;
			gap: 20px;
			align-items: center;
		}
	}
</style>
