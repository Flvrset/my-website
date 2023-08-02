<script>
	import '$lib/fonts/fonts.css';
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="contact">
	<form method="POST" use:enhance>
		<fieldset class="contact__fieldset">
			{#if form?.missingName}
				<p class="error">Jak się nazywasz?</p>
			{/if}

			<div class="form-group">
				<label class="contact--label" for="name">Imię</label>
				<div class="contact--area">
					<input id="name" name="name" type="text" placeholder="Twoje imię" class="form-control" />
				</div>
			</div>

			{#if form?.missingContact}
				<p class="error">Muszę się z tobą jakoś skontaktować, nie? 😇</p>
			{/if}
			<div class="contact__fieldset--contact-group">
				<div class="contact__fieldset--contact-group__email">
					<label class="contact--label" for="email">E-mail</label>
					<div class="contact--area">
						<input
							id="email"
							name="email"
							type="text"
							placeholder="Twój e-mail"
							class="form-control"
						/>
					</div>
				</div>

				<div class="contact__fieldset--contact-group__phone">
					<label class="contact--label" for="phone">Telefon</label>
					<div class="contact--area">
						<input
							id="phone"
							name="phone"
							type="text"
							placeholder="Twój numer telefonu"
							class="form-control"
						/>
					</div>
				</div>
			</div>

			{#if form?.missingMessage}
				<p class="error">Śmiało, napisz coś!</p>
			{/if}
			<div class="contact__fieldset--message">
				<label class="contact__fieldset--message-label" for="message">Twoja wiadomość</label>
				<div class="contact__fieldset--message-area">
					<textarea
						class="form-control"
						id="message"
						name="message"
						placeholder="Tutaj wpisz swoją wiadomość..."
						rows="5"
						style="resize: none;"
					/>
				</div>
			</div>

			<div class="form-group">
				<div class="col-md-12">
					<button type="submit" class="btn btn-primary">Wyślij</button>
				</div>
			</div>
		</fieldset>
	</form>
</div>

{#if form?.success}
	<div>xd</div>
{/if}

<style lang="scss">
	@import '$lib/styling/style.scss';
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
		}

		&--area {
			> input::placeholder {
				font-family: ClashDisplay-light;
			}
			> input {
				font-family: ClashDisplay-medium;
			}
		}

		&__fieldset {
			border: none;
			display: flex;
			flex-direction: column;
			gap: 20px;

			&--contact-group {
				display: flex;
				gap: 20px;
				flex-wrap: wrap;
			}

			&--message {
				&-label {
					font-family: ClashDisplay-medium;
				}
				&-area {
					> textarea::placeholder {
						font-family: ClashDisplay-light;
					}
					> textarea {
						font-family: ClashDisplay-medium;
						width: 100%;
					}
				}
			}
		}
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
			> b {
				font-size: 30px;
			}
		}
	}
</style>
