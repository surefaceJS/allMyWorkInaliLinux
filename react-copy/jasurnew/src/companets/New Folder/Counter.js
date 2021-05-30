import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            son: 0,
        }
    }




    render() {

        // let number = 0;

        const incrementNumber = () => {

            // number++;
            // console.log(number);

            this.interval = setInterval(() => {
                this.setState({
                    son: this.state.son + 1
                })
            }, 100)

        }
        const stop =() => {
            clearInterval(this.interval);
        }

        const decrementNumber = () => {

            // number++;
            // console.log(number);

            if (this.state.son > 0){
                this.setState({
                    son: this.state.son - 1
                })
            }

        }

        return (
            <div className="card">
                <div className="card-body">
                    <h1 className="my-3 text-center">{this.state.son}</h1>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button type="button" onMouseUp={stop} className="btn btn-success" onMouseDown={incrementNumber}>+</button>
                    <button type="button" className="btn btn-danger" onClick={decrementNumber}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter