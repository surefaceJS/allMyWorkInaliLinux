import React, {Component} from 'react';
import {Collapse} from "reactstrap";

import Element from "./Element";
import Counter from "./Counter";


class Wrap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }


    render() {

        const changeOpen = () => {
            this.setState({
                open: !this.state.open
            })
        }

        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-4">
                        <Element title="Hello world!" text="klmekwfmek wlfmelwn fjkewn fmewklfmewkl"
                                 rasm="/images/img100.jpg"/>
                    </div>
                    <div className="col-4">
                        <Element title="Привет мир!" text="fenwjfkn ewjkfn wejkfke wmfklwmeklfwe"
                                 rasm="/images/img101.png"/>
                    </div>
                    <div className="col-4">
                        <Element title="Salom dunyo!" text="grmklg rmeklgrn jewn mewk mfkewmfkl ewm"
                                 rasm="/images/img102.jpg"/>
                    </div>
                    <div className="col-4 offset-4 my-3">
                        <Counter/>
                    </div>
                    <div className="col-4 mt-3">
                        <div className="card">
                            <div className="card-header" onClick={changeOpen}>
                                <h5>Lorem ipsum dolor.</h5>
                            </div>
                            <Collapse isOpen={this.state.open}>
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam atque
                                    eligendi eum labore saepe ut, vel vero. Alias animi corporis dolore eligendi eos
                                    laboriosam, magni quasi unde velit voluptatum?
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrap;

// rcc  ==> class component
// rsf  ==> function component
// rsc  ==> arrow function component
// React Snippets