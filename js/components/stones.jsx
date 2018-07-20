import React from 'react';


const slides = [
    {
        id: 0,
        title: "Hematyt",
        description: `Hematyt jest kamieniem ochronnym i opiekuńczym, uszczelnia pole aury aby nie przedostawały się do naszej sfery niechciane energie. Rozpuszcza wszelkie nieprzychylne energie i zapobiega ich wchłanianiu. Przywraca poczucie kontroli. Wprowadza do życia spokój i harmonię. Zaleca się trzymanie go w dłoniach w chwilach silnego zdenerwowania.`,
        src: "img/Stones/Hematyt.jpg"
    },
    {
        id: 1,
        title: "Szatukit",
        description: `Szatukit uzdrawia relacje i pozwala wziąć odpowiedzialność za własne czyny. Łączy bezpośrednio ze Źródłem, przepełnia życie bezwarunkową miłością i uczciwością. Ułatwia rozmowę i werbalizowanie komunikatów z poziomu Duszy. Wszystko co czynimy jest zgodne w Najwyższym Dobrem i z Wolą Duszy.`,
        src: "img/Stones/Szatukit.jpg"
    },
    {
        id: 2,
        title: "Labradoryt",
        description: `Labradoryt jest mistycznym kamieniem ochronnym, który czerpie charakterystyczne energie zarówno ze Słońca jak i z Księżyca. Chroni przed utratą energii na poziomie ciała eterycznego, zabezpiecza, uszczelnia aurę przed przenikaniem niepowołanych energii oraz ułatwia komunikację pomiędzy świadomym umysłem a podświadomością. Zwany jest także kamieniem transformacji, praktyk szamańskich oraz poszerzania świadomości. Pomaga w projekcji astralnej i regresji. Wzmacnia siłę woli i poczucie własnej wartości. `,
        src: "img/Stones/Labradoryt.jpg"
    },
    {
        id: 3,
        title: "Heliotrop",
        description: `Heliotrop ugruntowuje i chroni duszę na wielu poziomach, wyostrza intuicję, rozwiewa zamęt umysłowy i utrzymuje negatywną energię oraz niepożądane istoty z daleka.
        Uczy podróżować niewidzialnie między światami i negocjować różne rzeczywistości. Jednym z jego najważniejszych zastosowań jest pomoc w zdobyciu dostępu do duchowych królestw przodków w celu uzdrowienia linii rodowej. Rozwiewa negatywne wzorce, pozwala żyć w teraźniejszości bez krępujących więzów przeszłości.`,
        src: "img/Stones/Heliotrop.jpg"
    },
    {
        id: 4,
        title: "Granat",
        description: `Granat to kamień miłości i seksualności, zwiększa potencję, zacieśnia realcje pomiędzy kochankami, pobudza zmysły, stabilizuje uczucia i zapewnia wierność w związku.`,
        src: "img/Stones/granat.jpg"
    },
    {
        id: 5,
        title: "Kwarc różowy",
        description: `Kwarc różowy jest znany jako "kamień miłości", ponieważ emituje silną wibrację bezwarunkowej miłości, radości, ciepła i uzdrowienia. Wzmacnia empatię oraz wrażliwość. Pomaga wszystkim którzy znajdują się w jego otoczeniu. Jest silnym wzmacniaczem energii, budzi szczęście, romantyczne uczucia i zmysłowość a także jest jednym z najważniejszych kamieni reprezentujących żeński pierwiastek.`,
        src: "img/Stones/Kwarc rozowy.jpg"
    },
    {
        id: 6,
        title: "Ametyst",
        description: `Ametyst jest nazywany "Kamieniem Duszy" ponieważ ułatwia komunikację ze swoim wewnętrznym JA. Używa się go do otwierania swoich kanałów do telepatii, poznania poprzednich wcieleń, jasnosłyszenia, jasnowidzenia i komunikacji z aniołami. Przynosi emocjonalną stabilność i wewnętrzną siłę.`,
        src: "img/Stones/Ametyst.jpg"
    },
    {
        id: 7,
        title: "Kryształ górski",
        description: `Kryształ górski jest kamieniem dzięki, któremu możemy uzyskać dostęp do starożytnej mądrości i z powodzeniem stosować ją w obecnym świecie. Jest bardzo dobrym kamieniem do podróży astralnych, manifestacji, wróżenia, channelingu, świadomego śnienia i pracy nad realizacją marzeń. Wspomaga rozwój duchowy i jasnowidzenie.`,
        src: "img/Stones/Krysztal Gorski.jpg"
    },
    {
        id: 7,
        title: "Zielony Awenturyn",
        description: `Zielony Awenturyn zwany jest „Kamieniem Możliwości”. Dodaje pewności siebie, zwiększa energię oraz prawdopodobieństwo odniesienia sukcesu we wszystkich dziedzinach życia, zwiększa kreatywność, cierpliwość, przynosi spokój i daje ukojenie.`,
        src: "img/Stones/Awenturyn.jpg"
    },
    {
        id: 8,
        title: "Larimar",
        description: `Larimar jest potężnym kamieniem duchowym. Uśmierza, uzdrawia i uświadamia. 
        Umożliwia spojrzenie na rzeczy z innej perspektywy. Reprezentuje spokój, czystość i miłość.`,
        src: "img/Stones/Larmar.jpg"
    },
]



class Stones extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    handleClick = () => {
        if (this.state.counter >= slides.length - 1) {
            this.setState({
                counter: 0
            })
        } else {
            this.setState({
                counter: this.state.counter + 1
            })
        }

    }
    render() {
        const active = "banner-slide--active";

        const slidesElem = slides.map((elem, i) => {
            let classElem = "col-12 banner-slide "
            if (this.state.counter == i) {
                classElem += "banner-slide--active"
            }
            return <div key={i} className={classElem}>

                <div className="col-7 banner-slide-text">
                    <span className="banner-slide-title">
                        <p> {elem.title} </p>
                    </span>
                    <div className="banner-slide-main">
                        {elem.description}
                    </div>


                </div>
                <div className="col-5 banner-slide-img zoom2">
                    <img src={elem.src} />
                </div>
            </div>
        })

        return <section className="banner-stones" id='stones' >
            <div className="container">
                <div className="banner" id="banner">
                    <button className="banner-prev" onClick={this.handleClick}>
                        <i className="fas fa-caret-left"></i>
                    </button>

                    <button className="banner-next" onClick={this.handleClick}>
                        <i className="fas fa-caret-right"></i>
                    </button>
                    <div className="banner-slides">
                        <div className="col-12 banner-title" > Kamienie i minerały </div>
                        {slidesElem}
                    </div>

                </div>

            </div>

        </section>

    }
}
export { Stones }