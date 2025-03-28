<script>
    import { onMount } from 'svelte';

    let isLoaded = false;
    
    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 100);
    });
</script>

<section class="hero-section wannabe-shown-on-scroll">
    <div class="background-shape"></div>
    <div class="background-shape shape-two"></div>
    
    <div class="hero">
        <div class="hero__content">
            <div class="hero__text-area">
                <div class="hero__subtitle" class:loaded={isLoaded}>Ekspert w dziedzinie rozwoju biznesu</div>
                <h1 class:loaded={isLoaded}>Joanna <span>Kominiak</span></h1>
                <div class="hero__bottom" class:loaded={isLoaded}>Trener Biznesu | Facylitator</div>
                <div class="hero__description" class:loaded={isLoaded}>
                    Pomagam organizacjom i zespołom osiągać lepsze wyniki poprzez rozwój umiejętności miękkich i efektywne procesy pracy.
                </div>
            </div>
            
            <div class="hero__buttons" class:loaded={isLoaded}>
                <a class="hero__buttons--contact" href="/contact">
                    Skontaktuj się ze mną
                    <span class="arrow">→</span>
                </a>
                <a class="hero__buttons--offers" href="/offers">kogo i jak wspieram</a>
            </div>
        </div>
        
        <div class="hero__image-container" class:loaded={isLoaded}>
            <div class="placeholder-image">
                <div class="image-overlay"></div>
            </div>
        </div>
    </div>
</section>

<section class="container wannabe-shown-on-scroll wannabe-shown-on-scroll--right">
    <div class="about">
        <div class="about__content">
            <h2 class="about__top">
                Pracować mądrzej,<br /> uwalniać od absurdu...
            </h2>
            <div class="about__top--addon">
                dostrzegać sens i robić coś po coś, dlaczegoś. Zatrzymywać się, oddalać perspektywę i budzić
                świadomość. Zarażać pasją. To cała ja.
            </div>
            <div class="about__bottom">
                Jestem Trenerem z dziesięcioletnim doświadczeniem w biznesie. <br />Tworzyłam autorską
                koncepcję rozwoju Pracowników w organizacji. Specjalizuję się w konstruowaniu i prowadzeniu
                szkoleń i warsztatów z umiejętności miękkich w różnych obszarach i na różnych poziomach
                zaawansowania. Moderując spotkania, wspieram zespoły w podejmowaniu decyzji i wychodzeniu z
                impasu.
            </div>
        </div>
        <div class="about__accent"></div>
    </div>
</section>

<section class="colored--wide" style="background-color: #9C3411;">
    <div class="container" style="min-height: 702px; align-items:flex-start">
        <div class="support">
            <h2>Kogo i jak wspieram?</h2>
            <div class="support__grid">
                <div class="support__card">
                    <div class="support__icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>Liderzy i Menedżerowie</h3>
                    <p>Profesjonalne programy rozwojowe dla liderów każdego szczebla</p>
                    <a href="/offers#offer_2" class="support__link">szkolenia i warsztaty</a>
                </div>
                <div class="support__card">
                    <div class="support__icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>Zespoły i Pracownicy</h3>
                    <p>Efektywne metody poprawy współpracy i komunikacji w zespołach</p>
                    <a href="/offers#offer_5" class="support__link">moderacja i facylitacja</a>
                </div>
                <div class="support__card">
                    <div class="support__icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>Trenerzy</h3>
                    <p>Mistrzowskie techniki prowadzenia szkoleń i warsztatów</p>
                    <a href="/offers#offer_3" class="support__link">szlifowanie kunsztu</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container">
    <div class="experience">
        <div class="experience__card">
            <div class="experience__head">
                <div class="experience__head--number">400</div>
                <div class="experience__head--bottom">uczestników szkoleń rocznie</div>
            </div>
            <div class="experience__content">
                Na sali szkoleniowej online i stacjonarnie goszczę różnych uczestników. Chętnie pracuję ze
                sprzedawcami, pracownikami back office i całymi zespołami. Wspieram przełożonych. Dzielę się
                wiedzą z trenerami, moderatorami i facylitatorami. Doceniam multidyscyplinarne grupy
                warsztatowe, dążę na sali do efektu synergii, czerpania od siebie i wspierania się nawzajem.
            </div>
        </div>
        <div class="experience__card">
            <div class="experience__head">
                <div class="experience__head--number">300</div>
                <div class="experience__head--bottom">godzin warsztatów rocznie</div>
            </div>
            <div class="experience__content">
                Fundamentem moich warsztatów jest cykl uczenia się osób dorosłych. Dlatego doświadczanie,
                refleksja jest kluczowa dla ugruntowania teorii i pragmatyki. Dbam o interakcję, aktywność i
                współudział. Głęboko wierzę w kontrakt uczestników i zadbanie o komfortową przestrzeń do
                pracy. Sala szkoleniowa jest idealną przestrzenią do swobodnego popełniania błędów, po to,
                by unikać ich w realnych sytuacjach.
            </div>
        </div>
        <div class="experience__card">
            <div class="experience__head">
                <div class="experience__head--number">9</div>
                <div class="experience__head--bottom">lat doświadczenia</div>
            </div>
            <div class="experience__content">
                Ważne, by być wiarygodną. Sądzę, że Trener powinien zarażać pasją, wierzyć w to, co
                przekazuje. Zachowuję neutralność. To uczestnicy spotkania są w centrum, Trener prowadzi
                grupę, wskazuje drogę, przeprowadza przez proces. Uruchamiam wrażliwość. Obserwacja grupy,
                ciekawość, diagnoza jej stanu w każdej części spotkania jest kluczem do stosowania
                odpowiednich narzędzi, nadawania właściwego tempa, podążania za uczestnikami.
            </div>
        </div>
    </div>
</section>

<section class="colored--wide" style="background-color: #252422;">
    <div class="container wannabe-shown-on-scroll" style="min-height: 561px;">
        <div class="quotes">
            <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9124 3.63953C9.67938 4.04651 7.13918 5.73256 7.13918 8.05814C7.13918 11.314 12.7392 10.3837 12.7392 15.2674C12.7392 18.0581 10.3144 20.5581 7.13918 20.5581C2.92474 20.5 0.5 17.3023 0.5 13.0581C0.5 7.4186 4.77217 1.13953 12.9124 0.5V3.63953ZM28.5 3.63953C25.267 4.04651 22.7268 5.73256 22.7268 8.05814C22.7268 11.314 28.3845 10.3837 28.3845 15.2674C28.3845 18.0581 25.9021 20.5581 22.7268 20.5581C18.5701 20.5581 16.1454 17.3605 16.1454 13.1163C16.1454 7.47674 20.4175 1.19767 28.4423 0.55814V3.63953H28.5Z" fill="#fffcf2"/></svg>
            <div class="quotes__carousel">
                <div class="quotes__testimonial">
                    <div class="quotes__text">
                        "Organizacyjnie wszystko dopięte na ostatni guzik. Asia ma wielki dar do przekazywania
                        wiedzy! Teraz tylko wdrażać w życie zdobyte informacje."
                    </div>
                    <div class="quotes__author">— Uczestnik szkolenia strategicznego</div>
                </div>
                <div class="quotes__testimonial">
                    <div class="quotes__text">
                        "Świetny warsztat, na którym poznałam nowe narzędzia, które mogę wykorzystywać przede
                        wszystkim w pracy, ale i w życiu codziennym. Żadna minuta szkolenia nie została
                        zmarnowana."
                    </div>
                    <div class="quotes__author">— Menedżer zespołu sprzedaży</div>
                </div>
                <div class="quotes__testimonial">
                    <div class="quotes__text">
                        "Warsztaty jak zawsze na wysokim poziomie — świetna jakość materiałów, prowadząca jak
                        zwykle przygotowana do perfekcji, dbająca o dobrą atmosferę. Super!"
                    </div>
                    <div class="quotes__author">— HR Manager</div>
                </div>
                <div class="quotes__testimonial">
                    <div class="quotes__text">
                        "Super szkolenie prowadzone w przyjaznej atmosferze. Bardzo dobrze przygotowane materiały.
                        Wiedza i kompetencja na najwyższym poziomie."
                    </div>
                    <div class="quotes__author">— Trener wewnętrzny</div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container">
    <div class="contact">
        <h2>Chcesz ze mną współpracować?</h2>
        <span>Jestem gotowa na wyzwania i chętnie podzielę się swoim doświadczeniem.</span>
        <a href="/contact" class="button-big">
            <span>SKONTAKTUJ SIĘ ZE MNĄ</span>
            <div class="button-arrow">→</div>
        </a>
    </div>
</section>

<style lang="scss">
    .colored--wide {
        width: 100vw;
        overflow-x: hidden;
        
        .container {
            @media screen and (max-width: 768px) {
                min-height: auto !important;
                padding: 20px 0;
            }
        }
    }
    .hero-section {
        position: relative;
        min-height: 95vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: 0 20px;
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
    
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        
        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }
        
        &__content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 1;
        }
        
        &__text-area {
            margin-bottom: 2rem;
        }
        
        &__subtitle {
            font-family: DMSans-Regular, sans-serif;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #9C3411;
            margin-bottom: 1rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 1s ease;
            
            &.loaded {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        h1 {
            @include h1;
            font-family: ClashDisplay-Medium, sans-serif;
            margin: 0 0 0.5rem 0;
            line-height: 1;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease 0.2s, transform 1s ease 0.2s;
            
            span {
                color: #9C3411;
                display: inline-block;
            }
            
            &.loaded {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        &__bottom {
            font-family: DMSans-Regular, sans-serif;
            font-weight: 400;
            font-size: 1.125em;
            letter-spacing: 0.015rem;
            line-height: 23px;
            margin-bottom: 1.5rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease 0.4s, transform 1s ease 0.4s;
            
            &.loaded {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        &__description {
            font-family: DMSans-Regular, sans-serif;
            font-size: 1.125rem;
            line-height: 1.6;
            max-width: 90%;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease 0.6s, transform 1s ease 0.6s;
            
            &.loaded {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        &__buttons {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease 0.8s, transform 1s ease 0.8s;
            flex-wrap: wrap;
            
            &.loaded {
                opacity: 1;
                transform: translateY(0);
            }
            
            a {
                @include button;
                transition: all 0.3s ease-in-out;
                position: relative;
                overflow: hidden;
                
                @media screen and (max-width: 480px) {
                    width: auto;
                    padding: 0 25px;
                    height: 60px;
                }
                
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: rgba(255,255,255,0.1);
                    transition: all 0.4s ease-in-out;
                }
                
                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    
                    &::before {
                        left: 100%;
                    }
                }
            }
            
            &--contact {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #9C3411;
                letter-spacing: 0.065em;
                font-size: 0.875em;
                gap: 10px;
                
                .arrow {
                    font-size: 1.2em;
                    transition: transform 0.3s ease;
                }
                
                &:hover .arrow {
                    transform: translateX(5px);
                }
                
                @media screen and (max-width: 480px) {
                    font-size: 0.75em;
                    min-width: 150px;
                }
            }
            
            &--offers {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #403d39;
                letter-spacing: 0.07em;
                font-size: 0.9375em;
                border: 1px solid transparent;
                
                &:hover {
                    background: transparent;
                    color: #403d39;
                    border: 1px solid #403d39;
                }
                
                @media screen and (max-width: 480px) {
                    font-size: 0.75em;
                    min-width: 160px;
                }
            }
        }
        
        &__image-container {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 1s ease 0.6s, transform 1.2s ease 0.6s;
            
            &.loaded {
                opacity: 1;
                transform: translateX(0);
            }
            
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
        
        .placeholder-image {
            width: 100%;
            height: 500px;
            background: linear-gradient(135deg, #9C3411 0%, #403d39 100%);
            border-radius: 12px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            
            &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 10px;
                right: 10px;
                bottom: 10px;
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 8px;
                z-index: 1;
            }
            
            .image-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url('$lib/images/hero.webp') center center/cover;
            }
        }
    }
    
    .about {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: stretch;
        width: 100%;
        background: #252422;
        box-shadow: 0px 4px 41px -7px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
        color: white;
        margin: 50px auto;
        overflow: hidden;
        
        &__content {
            flex: 1;
            padding: 80px 60px;
            z-index: 1;
            
            @media screen and (max-width: 480px) {
                padding: 40px 25px;
            }
        }
        
        &__accent {
            position: absolute;
            top: -50px;
            right: -50px;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(156, 52, 17, 0.2), rgba(156, 52, 17, 0.05));
            z-index: 0;
            
            &::after {
                content: '';
                position: absolute;
                bottom: -80px;
                left: -100px;
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: linear-gradient(135deg, rgba(156, 52, 17, 0.15), rgba(156, 52, 17, 0.02));
            }
        }

        &__top {
            @include h2;
            margin: 0 0 30px 0;
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

            &--addon {
                font-family: ClashDisplay-Light, sans-serif;
                margin: 30px 0;
                font-size: 20px;
                line-height: 27px;
                letter-spacing: 0.035em;
            }
        }

        &__bottom {
            font-family: DMSans-Regular, sans-serif;
            font-size: 1.5em;
            margin-top: 40px;
            
            @media screen and (max-width: 480px) {
                font-size: 1.25em;
            }
        }
    }

    .support {
        padding: 70px 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: white;
        width: 100%;
        
        @media screen and (max-width: 768px) {
            padding: 40px 20px;
            width: 100%;
            box-sizing: border-box;
        }
        
        @media screen and (max-width: 480px) {
            padding: 30px 15px;
        }
        
        > h2 {
            @include h2-semibold;
            margin: 0 0 60px 0;
            position: relative;
            
            @media screen and (max-width: 768px) {
                margin: 0 0 40px 0;
                font-size: 2.8em;
            }
            
            &::after {
                content: '';
                position: absolute;
                bottom: -20px;
                left: 0;
                width: 100px;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
            }
        }
        
        &__grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 40px;
            width: 100%;
            
            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
                gap: 30px;
                width: 100%;
            }
        }
        
        &__card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 30px;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            min-height: 300px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            
            @media screen and (max-width: 480px) {
                padding: 20px;
                min-height: auto;
            }
            
            &:hover {
                transform: translateY(-10px);
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            }
        }
        
        &__icon {
            margin-bottom: 20px;
            color: #ffb79b;
        }
        
        h3 {
            font-family: ClashDisplay-Light, sans-serif;
            font-size: 24px;
            margin: 0 0 15px 0;
            
            @media screen and (max-width: 480px) {
                font-size: 20px;
            }
        }
        
        p {
            font-family: DMSans-Regular, sans-serif;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
            
            @media screen and (max-width: 480px) {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
        
        &__link {
            font-family: ClashDisplay-Bold;
            font-size: 2.5em;
            color: #ffb79b;
            text-decoration: none;
            transition: all 0.3s ease;
            margin-top: auto;
            line-height: 1.1;
            
            &:hover {
                color: white;
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            }
            
            @media screen and (max-width: 768px) {
                font-size: 2.2em;
            }
            
            @media screen and (max-width: 480px) {
                font-size: 1.8em;
            }
        }
    }

    .experience {
        display: flex;
        width: 100%;
        gap: 30px;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 70px auto;
        
        &__card {
            background-color: #fff;
            color: #252422;
            border-radius: 30px;
            min-width: 250px;
            max-width: 320px;
            flex: 1;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 8px;
                background: linear-gradient(90deg, #9C3411, #403d39);
                transition: height 0.4s ease;
            }
            
            &:hover {
                transform: translateY(-15px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
                
                &::before {
                    height: 12px;
                }
            }
        }
        
        &__head {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 30px;
            
            &--number {
                font-size: 60px;
                font-family: ClashDisplay-Semibold, sans-serif;
                color: #9C3411;
                margin-bottom: 10px;
                line-height: 1;
            }
            
            &--bottom {
                font-family: ClashDisplay-Medium, sans-serif;
                font-size: 18px;
                color: #403d39;
                position: relative;
                padding-bottom: 15px;
                
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 2px;
                    background: #9C3411;
                }
            }
        }
        
        &__content {
            font-family: DMSans-Regular, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
        }
    }

    .quotes {
        height: 100%;
        width: 100%;
        position: relative;
        color: #fffcf2;
        padding: 60px 0;
        
        svg {
            position: absolute;
            top: 40px;
            left: 0;
            width: 50px;
            height: auto;
            opacity: 0.6;
        }
        
        &__carousel {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            justify-content: center;
            margin-top: 40px;
        }
        
        &__testimonial {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 40px;
            max-width: 400px;
            margin: 10px;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            
            &:hover {
                transform: translateY(-10px);
                background: rgba(255, 255, 255, 0.08);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            }
        }
        
        &__text {
            font-family: DMSans-Italic, sans-serif;
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 20px;
        }
        
        &__author {
            font-family: DMSans-Regular, sans-serif;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
            text-align: right;
        }
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 100px 20px;
        text-align: center;
        
        > h2 {
            @include h2-semibold;
            margin: 0 0 30px 0;
            
            @media screen and (max-width: 480px) {
                font-size: 2.5em;
            }
        }
        
        > span {
            font-family: DMSans-Regular;
            font-size: 1.875em;
            margin-bottom: 60px;
            max-width: 800px;
            
            @media screen and (max-width: 480px) {
                font-size: 1.45em;
                margin-bottom: 40px;
            }
        }
        
        .button-big {
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
                box-shadow: 0 20px 40px rgba(156, 52, 17, 0.3);
                
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

			@media screen and (max-width: 480px) {
                width: 100%;
                min-width: auto;
                height: 70px;
                font-size: 0.9rem;
                padding: 0 15px;
			}

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
        max-width: calc(100% - 40px);
        padding: 40px 0;
        
        @media screen and (max-width: 768px) {
            min-height: auto;
            padding: 30px 0;
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>
