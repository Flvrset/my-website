<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from 'svelte';

	inject({ mode: dev ? 'development' : 'production' });

	let scrollY: number;
	let scrolled = false;
	let mobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			scrolled = scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<svelte:window bind:scrollY />

<nav class="navbar" class:scrolled>
	<div class="navbar__container">
		<a href="/" class="navbar__logo">JOANNA KOMINIAK</a>

		<button class="navbar__mobile-toggle" aria-label="Toggle menu" on:click={toggleMobileMenu}>
			<span class:active={mobileMenuOpen}></span>
			<span class:active={mobileMenuOpen}></span>
			<span class:active={mobileMenuOpen}></span>
		</button>

		<div class="navbar__hrefs" class:open={mobileMenuOpen}>
			<a href="/contact" class="navbar__link">kontakt</a>
			<a href="/offers" class="navbar__link">szkolenia</a>
			<a
				href="https://www.linkedin.com/in/joanna-kominiak-936b33253/"
				target="_blank"
				rel="noreferrer"
				aria-label="linked in link"
				class="navbar__social"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
					/></svg
				>
			</a>
		</div>
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="footer">
	<div class="footer__content">
		<div class="footer__logo">JK</div>
		<div class="footer__info">
			<p>© {new Date().getFullYear()} Joanna Kominiak. All rights reserved.</p>
			<div class="footer__links">
				<a href="/contact">Kontakt</a>
				<a href="/offers">Szkolenia</a>
				<a href="/">Home</a>
				<a
					href="/images/certyfikat_ICVC_JK.pdf"
					target="_blank"
					rel="noreferrer"
					class="footer__certificate"
				>
					Standard Usług Rozwojowych ICVC - SURE
					<svg
						class="certificate-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
					>
						<path
							d="M13 3h2.996v5h-2.996v-5zm11 1v20h-24v-24h20l4 4zm-17 5h10v-7h-10v7zm15-4.171l-2.828-2.829h-.172v9h-14v-9h-3v20h20v-17.171zm-3 10.171h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.navbar {
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		position: fixed;
		width: 100%;
		transition: all 0.4s ease;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(8px);
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0);

		&.scrolled {
			padding: 10px 20px;
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(10px);
			box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
		}

		&__container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: 1200px;

			@media screen and (max-width: 767px) {
				padding: 0 15px;
				margin: 0 20px 0 0;
				box-sizing: border-box;
			}
		}

		&__mobile-toggle {
			display: none;
			flex-direction: column;
			justify-content: space-between;
			width: 30px;
			height: 21px;
			background: transparent;
			border: none;
			cursor: pointer;
			padding: 0;
			z-index: 110;

			@media screen and (max-width: 767px) {
				display: flex;
			}

			span {
				width: 100%;
				height: 3px;
				background-color: #252422;
				border-radius: 10px;
				transition: all 0.3s ease-in-out;
				transform-origin: 1px;

				&.active {
					&:first-child {
						transform: rotate(45deg);
						background-color: #9c3411;
					}

					&:nth-child(2) {
						opacity: 0;
						transform: translateX(20px);
					}

					&:last-child {
						transform: rotate(-45deg);
						background-color: #9c3411;
					}
				}
			}
		}

		&__logo {
			font-family: ClashDisplay-Semibold;
			font-size: 1.2rem;
			letter-spacing: 0.05em;
			color: #9c3411;
			position: relative;
			white-space: nowrap;

			@media screen and (max-width: 480px) {
				font-size: 1rem;
			}

			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -5px;
				width: 0;
				height: 2px;
				background: #9c3411;
				transition: width 0.3s ease;
			}

			&:hover::after {
				width: 100%;
			}
		}

		a {
			text-decoration: none;
			font-family: ClashDisplay-Medium;
			color: #252422;
			display: flex;
			transition: 0.3s ease;

			&:hover {
				color: #9c3411;
			}
		}

		&__hrefs {
			display: flex;
			gap: 30px;
			align-items: center;

			@media screen and (max-width: 767px) {
				position: fixed;
				top: 0;
				right: 0;
				height: 100vh;
				width: 250px;
				flex-direction: column;
				gap: 40px;
				padding: 80px 40px;
				background: white;
				z-index: 100;
				transform: translateX(100%);
				transition: transform 0.3s ease;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
				align-items: flex-start;
				justify-content: flex-start;

				&.open {
					transform: translateX(0);
				}
			}
		}

		&__link {
			position: relative;
			padding: 5px 0;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			font-size: 0.95rem;

			@media screen and (max-width: 767px) {
				font-size: 1.1rem;
			}

			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				width: 0;
				height: 2px;
				background: #9c3411;
				transition: width 0.3s ease;
			}

			&:hover::after {
				width: 100%;
			}
		}

		&__social {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 38px;
			height: 38px;
			border-radius: 50%;
			background: rgba(0, 0, 0, 0.03);
			transition: all 0.3s ease;

			@media screen and (max-width: 767px) {
				width: 44px;
				height: 44px;
			}

			svg {
				fill: #403d39;
				transition: fill 0.3s ease;
			}

			&:hover {
				background: #9c3411;
				transform: translateY(-3px);

				svg {
					fill: white;
				}
			}
		}
	}

	main {
		min-height: 100vh;
		padding-top: 80px;
	}

	.footer {
		background: #252422;
		padding: 40px 20px;
		color: white;

		&__content {
			max-width: 1200px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			gap: 30px;

			@media screen and (max-width: 767px) {
				flex-direction: column;
				text-align: center;
			}
		}

		&__logo {
			font-family: ClashDisplay-Semibold;
			font-size: 2rem;
			color: #9c3411;
			background: rgba(255, 255, 255, 0.05);
			width: 60px;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			flex-shrink: 0;
		}

		&__info {
			flex: 1;

			p {
				margin: 0 0 10px 0;
				opacity: 0.7;
				font-family: DMSans-Regular;
			}
		}

		&__links {
			display: flex;
			gap: 20px;
			flex-wrap: wrap;

			@media screen and (max-width: 767px) {
				justify-content: center;
			}

			a {
				color: white;
				text-decoration: none;
				opacity: 0.7;
				transition: all 0.3s ease;
				font-family: DMSans-Regular;

				&:hover {
					opacity: 1;
					color: #9c3411;
				}
			}
		}

		&__certificate {
			display: flex;
			align-items: center;
			gap: 6px;

			.certificate-icon {
				fill: currentColor;
				margin-top: -2px;
				flex-shrink: 0;
			}

			&:hover .certificate-icon {
				transform: translateY(-1px);
				transition: transform 0.3s ease;
			}
		}
	}
</style>
