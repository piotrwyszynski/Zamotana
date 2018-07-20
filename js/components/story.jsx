import React from 'react';

class Story extends React.Component {
    render() {
        return <section className="main-story" id="story">
            <div className="container-story">
                <div className="col-12 banner-story-title" > O mnie </div>
                <div className="col-12 banner-photo" id="banner">
                    <div className="col-3 story-img">
                        <img className="photo" src="img/photoAgata450.jpg" />
                    </div>
                    <div className="col-9 main-story-info">


                        <div>Odkryta pasja, przyjemność tworzenia, radość. Robienie talizmanów odmieniło moje życie, nauczyło cierpliwości,
                            dostarczyło ogromu szczęścia. Każdy talizman jest inny bo każda Dusza jest inna i potrzebuje wsparcia
                            konkretnych kamieni w drodze ku oświeceniu. Wszystko co robię jest niepowtarzalne, tworzone z Miłością,
                            w zgodzie z Najwyższym Źródłem i wolą Duszy. Zawiera w sobie moc pozytywnej energii.</div>
                        <div> Każdy kto zamawia talizman powinien być gotowy na zmiany i świadomy, że kamienie będą miały bezpośredni wpływ na jego życie.
                        Kamienie przychodzą niespodziewanie do naszego życia i równie niespodziewanie z niego odchodzą. Kamienie
                        naturalne to Świetliste Istoty, które towarzyszą nam każdego dnia, wspierają i chronią, pomagają dotrzeć
                            do wnętrza własnej Duszy.</div>
                         <p>
                            Zapraszam do swojego świata i życzę Ci:</p>
                        <div>* Miłości, inspiracji, spokoju i kreacji,</div>
                        <div>* Harmonii dla Duszy, dla ciała rozkoszy,</div>
                        <div>* Radości z jedności i bycia w niebycie,</div>
                        <div>* Wszechświata darów, magii i czarów,</div>
                        <div>* Porzucenia iluzji i zanurzenia się w prawdzie,</div>
                        <div>* Pasji tworzenia i życia spełnienia we wszystkich przejawach światła i cienia.</div>
                        <div className="with">
                            <div>Z miłością,</div>
                            <div className="with">Agata Chojnacka</div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    }
}
export { Story }