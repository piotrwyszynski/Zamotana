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