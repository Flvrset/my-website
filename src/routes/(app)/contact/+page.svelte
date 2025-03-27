<script>
    import '$lib/fonts/fonts.css';
    import { applyAction, enhance } from '$app/forms';
    import { onMount } from 'svelte';
    export let form;
    const captcha_public_key = '6LfbdFspAAAAAOyH5NLiq_yUSy4gsPqM1jHWt87-';
    
    let isLoaded = false;
    
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 100);
    });
</script>

<svelte:head>
    <script src="https://www.google.com/recaptcha/api.js?render={captcha_public_key}"></script>
</svelte:head>

<div class="contact-page">
    <div class="background-shape"></div>
    <div class="background-shape shape-two"></div>
    
    <div id="recaptchabox" />
    <div class="contact-container">
        <h1 class:loaded={isLoaded}>Napisz do <span>mnie!</span></h1>
        <form
            method="POST"
            class:loaded={isLoaded}
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
            <fieldset class="contact__fieldset">
                <div class="contact__errors">
                    {#if form?.missingName}
                        <p class="error" id="missingName">Jak mam się do Ciebie zwracać?</p>
                    {:else if form?.missingContact}
                        <p class="error" id="missingContact">Podaj, proszę wygodną dla Ciebie formę kontaktu.</p>
                    {:else if form?.missingMessage}
                        <p class="error" id="missingMessage">Śmiało, zostaw kilka słów!</p>
                    {/if}
                </div>

                <div class="form-group">
                    <label class="contact--label" for="name" style={form?.missingName ? 'color: #9C3411;' : ''}
                        >Imię</label
                    >
                    <div class="contact--area">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Twoje imię"
                            class={form?.missingName ? 'error-input' : ''}
                            aria-describedby="missingName"
                        />
                    </div>
                </div>

                <div class="contact__fieldset--contact-group">
                    <div class="contact__fieldset--contact-group__email">
                        <label
                            class="contact--label"
                            for="email"
                            style={form?.missingContact ? 'color: #9C3411;' : ''}>E-mail</label
                        >
                        <div class="contact--area">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Twój e-mail"
                                class={form?.missingContact ? 'error-input' : ''}
                                aria-describedby="missingContact"
                            />
                        </div>
                    </div>

                    <div class="contact__fieldset--contact-group__phone">
                        <label
                            class="contact--label"
                            for="phone"
                            style={form?.missingContact ? 'color: #9C3411;' : ''}>Telefon</label
                        >
                        <div class="contact--area">
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Twój numer telefonu"
                                class={form?.missingContact ? 'error-input' : ''}
                                aria-describedby="missingContact"
                            />
                        </div>
                    </div>
                </div>

                <div class="contact__fieldset--message">
                    <label
                        class="contact__fieldset--message-label"
                        for="message"
                        style={form?.missingMessage ? 'color: #9C3411;' : ''}>Twoja wiadomość</label
                    >
                    <div class="contact__fieldset--message-area">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tutaj wpisz swoją wiadomość..."
                            rows="5"
                            style="resize: none;"
                            class={form?.missingMessage ? 'error-input' : ''}
                            aria-describedby="missingMessage"
                        />
                    </div>
                </div>
                
                <div class="contact__submit">
                    {#if !form?.success}
                        <button type="submit" class="contact__button">
                            <span>Wyślij</span>
                            <div class="button-arrow">→</div>
                        </button>
                    {:else if form?.failWhileSending}
                        <div class="error">
                            <span>Wystąpił problem podczas wysyłania wiadomości</span>
                            <p>Spróbuj ponownie za jakiś czas lub napisz do mnie na: <strong>kominiakpoczta@gmail.com</strong></p>
                        </div>
                    {:else}
                        <div class="success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Dziękuję za kontakt!</span>
                            <p>Odezwę się do Ciebie jak najszybciej!</p>
                        </div>
                    {/if}
                </div>
            </fieldset>
        </form>
    </div>
</div>

<style lang="scss">
    .error-input {
        border-color: #9C3411 !important;
    }

    .contact-page {
        position: relative;
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .background-shape {
        position: absolute;
        top: -15%;
        right: -10%;
        width: 50vw;
        height: 50vw;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        background: rgba(156, 52, 17, 0.05);
        z-index: -1;
        transform: rotate(-15deg);
    }
    
    .shape-two {
        top: 60%;
        left: -20%;
        width: 40vw;
        height: 40vw;
        background: rgba(64, 61, 57, 0.05);
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    
    .contact-container {
        width: 100%;
        max-width: 800px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        background-color: white;
        padding: 40px;
        position: relative;
        box-sizing: border-box;
        
        @media screen and (max-width: 768px) {
            padding: 30px 20px;
        }
        
        @media screen and (max-width: 480px) {
            padding: 25px 15px;
        }
    }
    
    h1 {
        @include h1;
        font-family: ClashDisplay-Medium, sans-serif;
        margin: 0 0 30px 0;
        text-align: center;
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 1s ease;
        
        span {
            color: #9C3411;
        }
        
        &.loaded {
            opacity: 1;
            transform: translateY(0);
        }
        
        @media screen and (max-width: 768px) {
            font-size: 3.5em;
        }
        
        @media screen and (max-width: 480px) {
            font-size: 2.8em;
            margin-bottom: 20px;
        }
    }

    form {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease 0.2s, transform 1s ease 0.2s;
        
        &.loaded {
            opacity: 1;
            transform: translateY(0);
        }
    }

    input,
    textarea {
        padding: 14px 18px;
        border-radius: 20px;
        border-color: #E6E6E6;
        border-style: solid;
        border-width: 1.5px;
        font-family: DMSans-Regular, sans-serif;
        font-size: 16px;
        width: 100%;
        transition: all 0.3s ease;
        box-sizing: border-box;
        
        &:focus {
            outline: none;
            border-color: #9C3411;
            box-shadow: 0 0 0 2px rgba(156, 52, 17, 0.1);
        }
        
        &::placeholder {
            color: #AAAAAA;
        }
        
        @media screen and (max-width: 480px) {
            padding: 12px 14px;
            font-size: 15px;
        }
    }

    .contact {
        &__errors {
            margin-bottom: 20px;
            
            p.error {
                margin: 5px 0;
                padding: 8px 12px;
                background-color: rgba(156, 52, 17, 0.1);
                border-radius: 8px;
                font-family: DMSans-Regular, sans-serif;
                color: #9C3411;
                font-size: 14px;
            }
        }

        &--label {
            font-family: ClashDisplay-Medium, sans-serif;
            margin-left: 12px;
            display: block;
            margin-bottom: 8px;
            font-size: 18px;
            
            @media screen and (max-width: 480px) {
                font-size: 16px;
                margin-bottom: 6px;
            }
        }

        &--area {
            margin-bottom: 5px;
            width: 100%;
        }

        &__fieldset {
            border: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            
            @media screen and (max-width: 480px) {
                gap: 15px;
            }

            &--contact-group {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
                width: 100%;
                box-sizing: border-box;
                
                &__email {
                    flex: 1;
                    min-width: 0; /* Remove min-width constraint */
                    box-sizing: border-box;
                }
                
                &__phone {
                    flex: 0.6;
                    min-width: 0; /* Remove min-width constraint */
                    box-sizing: border-box;
                }
                
                @media screen and (max-width: 600px) {
                    flex-direction: column;
                    gap: 15px;
                    
                    &__email, &__phone {
                        width: 100%;
                    }
                }
            }

            &--message {
                width: 100%;
                box-sizing: border-box;
                
                &-label {
                    font-family: ClashDisplay-Medium, sans-serif;
                    margin-left: 12px;
                    display: block;
                    margin-bottom: 8px;
                    font-size: 18px;
                    
                    @media screen and (max-width: 480px) {
                        font-size: 16px;
                        margin-bottom: 6px;
                    }
                }
                
                &-area {
                    margin-bottom: 5px;
                    width: 100%;
                    box-sizing: border-box;
                }
            }
        }

        &__submit {
            display: flex;
            justify-content: center;
            margin-top: 30px;
            width: 100%;
        }

        &__button {
            @include button;
            background-color: #9C3411;
            font-size: 20px;
            letter-spacing: 0.055em;
            position: relative;
            font-family: ClashDisplay-Medium, sans-serif;
            transition: all 0.4s ease;
            border: none;
            min-width: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            overflow: hidden;
            cursor: pointer;
            
            @media screen and (max-width: 480px) {
                min-width: 160px;
                font-size: 18px;
                height: 58px; /* Slightly smaller height on mobile */
            }
            
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.1);
                transition: all 0.5s ease;
            }
            
            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(156, 52, 17, 0.3);
                
                &::before {
                    left: 100%;
                }
                
                .button-arrow {
                    transform: translateX(5px);
                }
            }
            
            .button-arrow {
                font-size: 1.2em;
                transition: transform 0.3s ease;
            }
        }
    }

    .error {
        background-color: #FFEBEE;
        border-radius: 20px;
        padding: 20px;
        font-family: DMSans-Regular, sans-serif;
        color: #9C3411;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        
        @media screen and (max-width: 480px) {
            padding: 15px;
        }
        
        span {
            font-family: ClashDisplay-Medium, sans-serif;
            font-size: 18px;
            display: block;
            margin-bottom: 10px;
            
            @media screen and (max-width: 480px) {
                font-size: 16px;
            }
        }
        
        p {
            margin: 5px 0 0;
            
            @media screen and (max-width: 480px) {
                font-size: 14px;
            }
        }
        
        strong {
            font-family: DMSans-Bold, sans-serif;
        }
    }

    .success {
        background-color: #E8F5E9;
        border-radius: 20px;
        padding: 30px 20px;
        font-family: DMSans-Regular, sans-serif;
        color: #2E7D32;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        
        @media screen and (max-width: 480px) {
            padding: 20px 15px;
        }
        
        svg {
            margin-bottom: 15px;
            width: 40px;
            height: 40px;
            
            @media screen and (max-width: 480px) {
                width: 30px;
                height: 30px;
                margin-bottom: 10px;
            }
        }
        
        span {
            font-family: ClashDisplay-Medium, sans-serif;
            font-size: 22px;
            margin-bottom: 10px;
            
            @media screen and (max-width: 480px) {
                font-size: 18px;
            }
        }
        
        p {
            margin: 0;
            font-size: 16px;
            
            @media screen and (max-width: 480px) {
                font-size: 14px;
            }
        }
    }
</style>
