import React, {Component} from 'react';

class Contact extends Component {

    state = {
        isSwitchOn: false,
    }
    render() {


        console.log(this.state.isSwitchOn)

        return (
            <div>
                <header id="header">

                    <div className="header container">

                        <div className="nav-bar">
                            <div className="brand">
                                <a href="#"><h2><span>J</span>asur <span>J</span>orayev</h2></a>
                            </div>

                            <div className="nav-list">
                                <div className="hamburger " onClick={() => this.setState({isSwitchOn: true})}><div className="bar"></div></div>

                                <ul>
                                    <li><a href="#" data-after="Home">Home</a></li>
                                    <li><a href="#" data-after="Servises">servises</a></li>
                                    <li><a href="#" data-after="Contact">contact</a></li>
                                    <li><a href="#" data-after="Progext">progext</a></li>
                                </ul>


                            </div>
                        </div>


                    </div>

                </header>
            </div>
        );
    }
}

export default Contact;
