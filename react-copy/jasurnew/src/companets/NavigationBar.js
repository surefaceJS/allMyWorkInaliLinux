import React from "react";
class NavigationBar extends React.Component {
    // shotga campanentla yoziladi va  bu funcsiyan qogan joyda bemalol chaqirvose boldi...

    render() {
        return (
            <div>
                 <header>
                <div className="container">
                    <div className="row">
                        <div className="left d-flex  align-items-center">
                            <button type="button" className="btn">
                                <img className="burger" src="img/burger.svg" alt="" />
                            </button>
                            <div className="navbar-brand">
                                <a href="index.html"><img className="logo ml-3" src="img/logo.svg" /></a>
                            </div>
                                <div className="navbar-nav">
                                <ul className="nav  align-items-center">
                                    <li className="nav-item d-flex">
                                        <a className="nav-link buttonNav" href="index1.html"><span>Xizmatlar</span></a>
                                    </li>
                                    <li className="nav-item d-flex">
                                        <a className="nav-link buttonNav" href="index2.html"><span>Loyhalar</span></a>
                                    </li>
                                    <li className="nav-item d-flex">
                                        <a className="nav-link buttonNav" href="index3.html"><span>Biz haqimizda</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="pl-2 " href="#"><img className="play" src="img/play-button 1.svg" alt="" /></a>
                                    </li>
                                     <li className="nav-item sur">
                                        <a href="tel:+998712998688" className="tel nav-link font-Exo2-Regular">+998 (71) 299-86-88</a>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <a href="#"><img src="img/search.svg" /></a>
                                    </li>
                                    <li className="nav-item ml-4">
                                        <a href="#" className="question nav-link font-Exo2-Regular">Savol berish</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
                </header>
            </div>
           
        )
    }

}
export default NavigationBar;