<script lang="ts">
    import '$lib/fonts/fonts.css';
    import { onMount } from 'svelte';
    import offer1 from '$lib/images/offer1.webp';
    import yoga from '$lib/images/person-doing-yoga-outdoors 1.png';
    
    let scroll: number;
    let speed = 0.2;
    let isLoaded = false;
    
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 100);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-on-scroll');
                }
            });
        }, { threshold: 0.15 });
        
        document.querySelectorAll('.wannabe-shown-on-scroll').forEach((el) => {
            observer.observe(el);
        });
    });
</script>

<svelte:window bind:scrollY={scroll} />

<div class="background-shape"></div>
<div class="background-shape shape-two"></div>

<div class="header wannabe-shown-on-scroll">
    <h1>Zaglądnij <br /> do mojego menu</h1>
    <div class="header__subtitle" class:loaded={isLoaded}>
        Wybierz szkolenie dopasowane do potrzeb Twojej organizacji
    </div>
</div>

<section class="container wannabe-shown-on-scroll">
    <div class="offer-with-image">
        <img
            draggable="false"
            src={offer1}
            style:transform={`translateY(${scroll * -1 * speed + 60}px)`}
            alt="Wzmacnianie efektywności"
            aria-hidden="true"
            class="parallax-image"
        />
        <div class="offer offer__first" id="offer_1">
            <div class="offer__content">
                <h2>Wzmacnianie efektywności</h2>
                <span>w tych warsztatach skupiam się na:</span>
                <div class="offer--list">
                    <ul>
                        <li>praca pod presją czasu</li>
                        <li>automotywacja</li>
                        <li>komunikacja z informacją zwrotną</li>
                        <li>funkcjonowanie w zespole</li>
                        <li>kontakt poprzez korespondencję</li>
                        <li>praca z nawykiem</li>
                        <li>współpraca</li>
                        <li>czerpanie z różnorodności</li>
                        <li>budzenie pasji</li>
                        <li>troska o klienta w design thinking</li>
                        <li>efektywna korespondencja</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container wannabe-shown-on-scroll wannabe-shown-on-scroll--right">
    <div class="offer offer__second" id="offer_2">
        <div class="offer__content">
            <h2>Pakiet szkoleń dla Menedżerów i Liderów</h2>
            <span>w tych warsztatach pracujemy nad:</span>
            <div class="offer--list">
                <ul>
                    <li>rola Lidera</li>
                    <li>przywództwo sytuacyjne</li>
                    <li>budowanie zespołu</li>
                    <li>dysfunkcje pracy zespołowej</li>
                    <li>informacja zwrotna</li>
                    <li>komunikacja</li>
                    <li>praca na celach</li>
                </ul>
                <ul>
                    <li>mechanizmy konfliktu</li>
                    <li>procesy zmiany</li>
                    <li>motywowanie</li>
                    <li>stres pod kontrolą</li>
                    <li>organizacja pracy</li>
                    <li>budowanie zaufania</li>
                    <li>delegowanie</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="colored--wide" style="background-color: #252422;">
    <div class="container container--custom">
        <div class="custom">
            <h2>Szukasz<br />innego<br />szkolenia?</h2>
            <a href="/contact" class="cta-button"> 
                <span>SKONTAKTUJ SIĘ ZE MNĄ</span>
                <div class="button-arrow">→</div>
            </a>
            <img draggable="false" alt="yoga" aria-hidden="true" src={yoga} loading="lazy" class="yoga-image" />
        </div>
    </div>
</section>

<section class="container wannabe-shown-on-scroll">
    <div class="offer offer__third" id="offer_3">
        <div class="offer__content">
            <h2>Train the Trainer<br />szlifowanie kunsztu</h2>
            <span>tutaj dzielę się wiedzą:</span>
            <ul>
                <li>budowanie konstrukcji szkolenia</li>
                <li>kontraktowanie</li>
                <li>uczenie się osób dorosłych</li>
                <li>fazy życia grupy</li>
                <li>trudny uczestnik</li>
                <li>rozgrzewkowe stałe elementy spotkań</li>
                <li>podsumowania i pomosty w przyszłość</li>
                <li>obawy i nadzieje Trenera</li>
            </ul>
        </div>
    </div>
</section>

<section class="container wannabe-shown-on-scroll">
    <div class="offer offer__fourth" id="offer_4">
        <div class="offer__content">
            <h2>Konstruowanie i podpinanie pracowników organizacji pod misję, wizję i wartości.</h2>
        </div>
    </div>
</section>

<section class="container wannabe-shown-on-scroll wannabe-shown-on-scroll--right">
    <div class="offer offer__fifth" id="offer_5">
        <div class="offer__content">
            <h2>Gdy wiedza jest w zespole...</h2>
            <span
                >Dużą część potrzeb grupy jesteśmy w stanie spełnić właściwie moderując spotkania. Wtedy
                przyjmuję rolę Facylitatora i prowadzę uczestników w taki sposób, by zbliżyli się do swojego
                celu i osiągnęli go. Każde takie spotkanie konstuuję indywidualnie w zależności od wyzwania po
                jego uczestników.</span
            >
            <ul>
                <li>budowanie strategii</li>
                <li>usprawnianie procesów</li>
                <li>wzmacnianie komunikacji</li>
                <li>rozwiązywanie konfliktów</li>
                <li>budowanie zespołów</li>
            </ul>
        </div>
    </div>
</section>

<section class="container">
    <div class="contact">
        <h1>Coś przyciągnęło twoją uwagę?</h1>
        <a href="/contact" class="cta-button">
            <span>SKONTAKTUJ SIĘ ZE MNĄ</span>
            <div class="button-arrow">→</div>
        </a>
    </div>
</section>

<style lang="scss">
    .background-shape {
        position: absolute;
        top: 5%;
        right: 10%;
        width: 40vw;
        height: 40vw;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        background: rgba(156, 52, 17, 0.05);
        z-index: -1;
        transform: rotate(-15deg);
    }
    
    .shape-two {
        top: 60%;
        left: 0;
        width: 35vw;
        height: 35vw;
        background: rgba(64, 61, 57, 0.05);
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

	.colored--wide {
        width: 100%;
        position: relative;
        overflow-x: hidden;
        min-height: 550px;
    }

    .header {
        display: flex;
        flex-direction: column;
        padding: 100px 50px 20px 50px;
        max-width: 1064px;
        margin: 0 auto;

        h1 {
            @include h1;
            margin-bottom: 20px;
            position: relative;
            
            &::after {
                content: '';
                position: absolute;
                bottom: -15px;
                left: 0;
                width: 80px;
                height: 3px;
                background: #9C3411;
            }
        }

        &__subtitle {
            font-family: DMSans-Regular, sans-serif;
            font-size: 1.5rem;
            margin-top: 20px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease 0.4s, transform 1s ease 0.4s;
            
            &.loaded {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1064px;
        margin: auto;
        min-height: 80vh;
        position: relative;
        padding: 40px 20px;

        &--custom {
            min-height: 629px; 
            display: block;
        }
    }

    .offer-with-image {
        display: flex;
        position: relative;
        align-items: center;
        margin-bottom: 40px;
        width: 100%;
        
        .parallax-image {
            border-radius: 14vmin;
            position: absolute;
            z-index: 1;
            right: 514px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
            transition: transform 0.5s ease-out;
        }
    }

    .colored--wide {
        width: 100vw;
        overflow: hidden;
        min-height: 680px;
        position: relative;
    }

    .custom {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: #ccc5b9;
        position: relative;
        padding: 50px 20px;
        
        > h2 {
            font-family: ClashDisplay-Medium;
            font-size: 96px;
            margin-top: 50px;
            margin-bottom: 80px;
            line-height: 81%;
            position: relative;
            z-index: 2;
        }
        
        .yoga-image {
            width: 100%;
            max-width: 910px;
            position: absolute;
            left: 260px;
            top: 51px;
            z-index: 1;
            transition: transform 0.5s ease;
            
            &:hover {
                transform: scale(1.02);
            }
        }
    }

    .offer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 12vmin;
        box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease-in-out;
        position: relative;
        width: 100%;
        overflow: hidden;
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0px 15px 45px -10px rgba(0, 0, 0, 0.3);
        }
        
        &__content {
            padding: 50px 90px;
        }

        h2 {
            @include h2;
            margin-bottom: 15px;
            margin-top: 0;
            position: relative;
            
            &::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 60px;
                height: 3px;
                background: currentColor;
                opacity: 0.6;
            }
        }
        
        span {
            font-family: DMSans-Regular, sans-serif;
            font-size: 20px;
            display: block;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
        ul {
            font-family: DMSans-Regular, sans-serif;
            font-size: 20px;
            margin: 0;
            padding-left: 20px;
            
            li {
                margin-bottom: 10px;
                position: relative;
            }
        }

        &__first {
            min-height: 621px;
            margin-bottom: 30px;
            margin-left: 470px;
            background-color: #9C3411; 
            color: white;
            
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(156, 52, 17, 0.8), #9C3411);
                z-index: -1;
            }
        }
        
        &__second {
            min-height: 621px;
            margin-bottom: 100px;
            background-color: #CCC5B9;
        }
        
        &__third {
            padding: 50px 0;
            background-color: #fffcf2;
            position: relative;
        }
        
        &__fourth {
            min-height: 300px;
            background-color: #0e0f19;
            color: #fffcf2;
            display: flex;
            align-items: center;
            position: relative;
            
            background: linear-gradient(135deg, #0e0f19 30%, #1e2533 100%);
            
            h2 {
                font-size: 3em;
                line-height: 1.2;
                max-width: 90%;
            }
        }

        &__fifth {
            min-height: 450px;
            background-color: #ccc5b9;
            position: relative;
            
            span {
                font-size: 22px;
                margin-bottom: 25px;
                line-height: 1.4;
            }
        }
        
        &--list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 20px;
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 100px 20px;
        text-align: center;
        position: relative;
        
        &::before {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: rgba(156, 52, 17, 0.05);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
        }
        
        h1 {
            @include h1;
            margin-bottom: 50px;
        }
    }
    
    .cta-button {
        @include button-big;
        background-color: #9C3411;
        letter-spacing: 0.055em;
        transition: all 0.4s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        position: relative;
        overflow: hidden;
        z-index: 2;
        
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
            transform: translateY(-10px);
            
            &::before {
                left: 100%;
            }
            
            .button-arrow {
                transform: translateX(8px);
            }
        }
        
        .button-arrow {
            font-size: 1.5em;
            transition: all 0.3s ease;
        }
    }

    @media screen and (max-width: 1100px) {
        .offer-with-image {
            .parallax-image {
                right: auto;
                left: -100px;
                opacity: 0.4;
                z-index: 0;
            }
        }
        
        .offer__first {
            margin-left: 0;
        }
        
        .offer h2 {
            font-size: 3.2em;
        }
    }

    @media screen and (max-width: 768px) {
        .header {
            padding: 80px 30px 20px 30px;
            
            h1 {
                font-size: 4em;
            }
            
            &__subtitle {
                font-size: 1.25rem;
            }
        }

		
        .colored--wide:has(.custom) {
			.container--custom {
				min-height: 0;
			}
			min-height: 0;
		}
		
        .custom {
            > h2 {
                font-size: 3.5em;
                margin-top: 30px;
                margin-bottom: 40px;
            }
            
            .yoga-image {
				display: none;
            }
        }
        
        .offer {
            &__content {
                padding: 40px 30px;
            }
            
            h2 {
                font-size: 2.8em;
                line-height: 1.2;
            }
            
            span, ul {
                font-size: 18px;
            }
            
            &__fourth h2 {
                font-size: 2.4em;
            }
        }
    }

    @media screen and (max-width: 480px) {
        .header {
            padding: 60px 15px 20px 15px;
            
            h1 {
                font-size: 3em;
            }
            
            &__subtitle {
                font-size: 1rem;
            }
        }

        .container {
            padding: 20px 15px;
            min-height: auto;
        }

        .offer-with-image {
            margin-bottom: 10px;
            
            .parallax-image {
                display: none;
            }
        }

        .colored--wide {
            min-height: auto;
        }

        .custom {
            > h2 {
                font-size: 2.5em;
                margin-top: 20px;
                margin-bottom: 30px;
                text-align: center;
            }
            
            .cta-button {
                width: 100%;
                min-width: auto;
                height: 80px;
                font-size: 1rem;
            }
        }

        .offer {
            border-radius: 24px;
            
            &__content {
                padding: 25px 15px;
            }
            
            h2 {
                font-size: 2.2em;
                line-height: 1.2;
            }
            
            span, ul {
                font-size: 16px;
            }
            
            &__first {
                min-height: auto;
                padding: 20px 0;
            }
            
            &__second {
                min-height: auto;
                margin-bottom: 40px;
            }
            
            &__third {
                padding: 25px 0;
                
                ul {
                    font-size: 16px;
                }
                
                &::before {
                    height: 5px;
                }
            }
            
            &__fourth {
                min-height: auto;
                
                h2 {
                    font-size: 1.8em;
                    line-height: 1.3;
                }
            }
            
            &__fifth {
                min-height: auto;
                
                &::before {
                    height: 5px;
                }
                
                span {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
                
                ul {
                    font-size: 16px;
                }
            }
            
            &--list {
                gap: 0;
            }
        }
        
        .contact {
            padding: 50px 15px;
            
            h1 {
                font-size: 2.5em;
                margin-bottom: 30px;
            }
            
            .cta-button {
                width: 100%;
                min-width: auto;
                height: 70px;
                font-size: 0.9rem;
                padding: 0 15px;
            }
        }
    }
</style>
