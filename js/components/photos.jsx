
import React from 'react';

class Photos extends React.Component {
    render() {
        return <section className="photos" id="photos">
            <div className="container">
                <div className="col-12 banner-title" > Talizmany </div>
                <div className="col-12 photos-list">
                    <ul>

                        <li>
                            <img className="zoom" src="img/photos/1.jpg" alt="" />
                        </li>
                        <li>
                            <img className="zoom" src="img/photos/2.jpg" alt="" />
                        </li>
                        <li>
                            <img className="zoom" src="img/photos/3.jpg" alt="" />
                        </li>
                        <li>
                            <img className="zoom" src="img/photos/4.jpg" alt="" />
                        </li>
                        <li>
                            <img className="zoom" src="img/photos/5.jpg" alt="" />
                        </li>
                        <li>
                            <img className="zoom" src="img/photos/6.jpg" alt="" />
                        </li>

                    </ul>
                    <div className="col-12 " >
                        <a href="" className="link-photos" >Więcej ...</a>

                    </div>

                </div>
            </div>
        </section>
    }
}
export { Photos }