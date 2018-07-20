import React from 'react';
import { Header } from './header.jsx';
import { Info } from './info.jsx';
import { Story } from './story.jsx';
import { Stones } from './stones.jsx';
import { Photos } from './photos.jsx';
import { Price } from './price.jsx';
import { Footer } from './footer.jsx';
import { Contakt } from './contakt.jsx';


class App extends React.Component {
    render() {
        return  <div>
                <Header />
                <Info />
                <Story />
                <Stones />
                <Photos />
                <Price />
                <Contakt />
                <Footer />

            </div>

    }
}
export { App }
