import React from 'react';

class Footer extends React.Component {
    render() {
        return <section className="main-footer">
             <div className="container container-footer">
                <div className="col-6 footer-left" > Copyright 2018 | All Rights Reserved. Zamotana.com </div>
                <div className="col-6 footer-right">

                    <div className="footer-images">
                    <a href="https://www.instagram.com/zamotanacom/?hl=pl" className="image-icons">
                        <img src="img/instagram-logo.png" alt="instagram Icon" />
                    </a>
                    </div>
                    <div className="footer-images">
                    <a href="https://www.facebook.com/zamotanacom/" className="image-icons">
                        <img src="img/facebook-logo.png" alt="facebook Icon" />
                    </a>
                </div>
                <span className="page-logo-footer">

                    <span>Zamotana.com</span>
                </span>
                </div>
            </div>
        </section>
    }
}
export { Footer }