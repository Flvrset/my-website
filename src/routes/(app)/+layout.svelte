<script lang="ts">
	import {dev} from '$app/environment';
	import {inject} from '@vercel/analytics';

	inject({mode: dev ? 'development' : 'production'});
</script>

<nav class="navbar">
	<a href="/">HOME</a>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<div class="navbar__hrefs">
		<a href="/contact">kontakt</a>
		<a href="/offers">szkolenia</a>
		<a
			href="https://www.linkedin.com/in/joanna-kominiak-936b33253/"
			target="_blank"
			rel="noreferrer"
			aria-label="linked in link"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
				/></svg
			>
		</a>
	</div>
</nav>
<main>
	<slot />
</main>

<style lang="scss">
	.navbar {
		z-index: 100;
		display: flex;
		justify-content: space-between;
		@media screen and (max-width: 767px) {
			justify-content: space-around;
		}
		align-items: center;
		padding: 20px;
		position: fixed;
		width: 98%;
		a {
			text-decoration: none;
			font-family: ClashDisplay-Medium;
			color: black;
			display: flex;
			transition: 0.2s ease;
			&:hover {
				transition: 0.2s ease;
				transform: perspective(1px) scale(1.1);
			}
		}

		&__hrefs {
			display: flex;
			gap: 20px;
			align-items: center;
		}
	}
</style>
