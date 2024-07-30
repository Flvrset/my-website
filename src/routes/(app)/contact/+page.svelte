<script>
	import '$lib/fonts/fonts.css';
	import { applyAction, enhance } from '$app/forms';
	export let form;
	const captcha_public_key = '6LfbdFspAAAAAOyH5NLiq_yUSy4gsPqM1jHWt87-';
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?render={captcha_public_key}"></script>
</svelte:head>

<div class="contact">
	<div id="recaptchabox" />
	<h1>Napisz do mnie!</h1>
	<form
		method="POST"
		use:enhance={async ({ formData }) => {
			const captcha = new Promise((resolve) => {
				grecaptcha.ready(function () {
					grecaptcha.execute(captcha_public_key, { action: 'submit' }).then(function (t) {
						formData.append('token', t);
						resolve();
					});
				});
			});
			await captcha;
			return async ({ result }) => {
				await applyAction(result);
			};
		}}
	>
		<fieldset
			class="contact__fieldset"
			style="display: flex; align-items: center; max-width: 550px;"
		>
			<div class="contact__fieldset">
				{#if form?.missingName}
					<p class="error">Jak mam się do Ciebie zwracać?</p>
				{:else if form?.missingContact}
					<p class="error">Podaj, proszę wygodną dla Ciebie formę kontaktu.</p>
				{:else if form?.missingMessage}
					<p class="error">Śmiało, zostaw kilka słów!</p>
				{/if}

				<div class="form-group">
					<label class="contact--label" for="name" style={form?.missingName ? 'color: red;' : ''}
						>Imię</label
					>
					<div class="contact--area">
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Twoje imię"
							class={form?.missingName ? 'error-input' : ''}
						/>
					</div>
				</div>

				<div class="contact__fieldset--contact-group">
					<div class="contact__fieldset--contact-group__email" style="flex: 1;">
						<label
							class="contact--label"
							for="email"
							style={form?.missingContact ? 'color: red;' : ''}>E-mail</label
						>
						<div class="contact--area">
							<input
								id="email"
								name="email"
								type="text"
								placeholder="Twój e-mail"
								class={form?.missingContact ? 'error-input' : ''}
								style="width: 100%;"
							/>
						</div>
					</div>

					<div class="contact__fieldset--contact-group__phone" style="flex-basis: 0">
						<label
							class="contact--label"
							for="phone"
							style={form?.missingContact ? 'color: red;' : ''}>Telefon</label
						>
						<div class="contact--area">
							<input
								id="phone"
								name="phone"
								type="text"
								placeholder="Twój numer telefonu"
								class={form?.missingContact ? 'error-input' : ''}
								style="width: 145px;"
							/>
						</div>
					</div>
				</div>

				<div class="contact__fieldset--message">
					<label
						class="contact__fieldset--message-label"
						for="message"
						style={form?.missingMessage ? 'color: red;' : ''}>Twoja wiadomość</label
					>
					<div class="contact__fieldset--message-area">
						<textarea
							id="message"
							name="message"
							placeholder="Tutaj wpisz swoją wiadomość..."
							rows="5"
							style="resize: none;"
							class={form?.missingMessage ? 'error-input' : ''}
						/>
					</div>
				</div>
			</div>
			<div>
				{#if !form?.success}
					<button type="submit" class="contact__button">Wyślij</button>
				{:else if form?.failWhileSending}
					<div class="error">
						Wystąpił problem podczas wysyłania wiadomości, spróbuj ponownie za jakiś czas lub napisz
						do mnie na: <strong> kominiakpoczta@gmail.com </strong>
					</div>
				{:else}
					<div class="success">Dziękuję za kontakt! Odezwę się do Ciebie jak najszybciej!</div>
				{/if}
			</div>
		</fieldset>
	</form>
</div>

<style lang="scss">
	.error-input {
		border-color: red !important;
	}

	input,
	textarea {
		padding: 7px;
		border-radius: 20px;
		border-color: #252422;
		border-style: solid;
		border-width: 1.5px;
		&:focus {
			outline: none;
			border-style: solid;
		}
	}

	.contact {
		display: flex;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		align-content: center;

		&--label {
			font-family: ClashDisplay-medium;
			margin-left: 12px;
		}

		&--area {
			> input::placeholder {
				font-family: DMSans-Regular;
			}
			> input {
				font-family: DMSans-Regular;
				box-sizing: border-box;
			}
		}

		&__fieldset {
			border: none;
			display: flex;
			flex-direction: column;
			gap: 13px;
			align-items: stretch;

			&--contact-group {
				display: flex;
				gap: 20px;
				flex-wrap: wrap;
				justify-content: space-between;
				> div {
					width: auto;
				}
			}

			&--message {
				&-label {
					font-family: ClashDisplay-medium;
					margin-left: 12px;
				}
				&-area {
					> textarea::placeholder {
						font-family: DMSans-Regular, sans-serif;
					}
					> textarea {
						font-family: DMSans-Regular, sans-serif;
						width: 100%;
						box-sizing: border-box;
					}
				}
			}
		}
		> h1 {
			@include h1;
			display: flex;
			align-items: center;
			padding: 0 10px;
		}

		&__button {
			@include button;
			background-color: #eb5e28;
			font-size: 20px;
			letter-spacing: 0.055em;
			position: relative;
			font-size: 1.1em;
			transition: 0.2s ease-in-out;
			border: none;
			min-width: 115px;
			height: 60px;

			&:hover {
				transform: scale(1.05);
				transition: 0.2s ease-in-out;
			}
		}
	}

	.error {
		background-color: rgb(247, 175, 175);
		border-radius: 20px;
		padding: 20px;
		border-color: rgb(0, 0, 0);
		border-width: 2px;
		border-style: none;
		font-family: DMSans-Regular;
		margin: 0;
	}

	.success {
		background-color: rgb(128, 168, 128);
		border-radius: 20px;
		padding: 20px;
		border-color: rgb(0, 0, 0);
		border-width: 2px;
		border-style: none;
		font-family: DMSans-Regular;
		margin: 0;
		color: white;
	}
</style>
