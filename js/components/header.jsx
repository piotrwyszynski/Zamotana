import React from 'react';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends React.Component {
    render() {
        return <header className="page-header">
            <div className="container-header">
                <AnchorLink href="#info" className="page-header-logo">Zamotana.com</AnchorLink>
                <nav className="page-nav">
                    <ul className="page-nav-menu">

                        <li className="page-header-manu-list">
                            {/* <a href='#story' name="about" className="page-nav-list-el-link">O mnie</a> */}
                            <AnchorLink href='#story' name="about" className="page-nav-list-el-link">O mnie</AnchorLink>
                        </li>


                        <li className="page-header-manu-list">
                            {/* <a href='#stones' name="stones" className="page-nav-list-el-link">Kamienie i minerały</a> */}
                            <AnchorLink href='#stones' name="stones" className="page-nav-list-el-link">Kamienie i minerały</AnchorLink>
                        </li>
                        <li className="page-header-manu-list">
                            {/* <a href='#photos' name="talizmans" className="page-nav-list-el-link">Talizmany</a> */}
                            <AnchorLink href='#photos' name="talizmans" className="page-nav-list-el-link">Talizmany</AnchorLink>
                        </li>
                        <li className="page-header-manu-list">
                            <AnchorLink href="#price" name="form" className="page-nav-list-el-link">Cennik</AnchorLink>
                        </li>
                        <li className="page-header-manu-list">
                            <AnchorLink href="#contakt" name="contakt" className="page-nav-list-el-link">Kontakt</AnchorLink>
                        </li>

                        {/* <li className="page-header-manu-list">
                            <a href="" name="form" className="page-nav-list-el-link">Formularz kontaktowy</a>
                        </li> */}


                    </ul>
                    <div className="hamb" >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>

                </nav>
            </div>
        </header>
    }
}
export { Header }
