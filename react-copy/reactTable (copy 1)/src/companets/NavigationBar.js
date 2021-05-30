import React, {Component} from "react";
import axios from "axios";

class NavigationBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            shungaSol: [],
        }
    }


    componentDidMount() {

        axios.get("https://api.covid19api.com/summary")
            .then((res) =>{
                console.log(res)
                this.setState({
                    shungaSol: res.data
                })
            })
    }

    render() {




        return (
            <div className="container">


                <div className="row">


                    {this.state.shungaSol.map((item,index) => {
                        return (
                            <div className="col-10 m-auto">
                                <div className="table table-striped table-hover">
                                    <thead>

                                    <tr>
                                        <th>№</th>
                                        <th>Countries</th>
                                        <th>Confirmed</th>
                                        <th>Deaths</th>
                                        <th>Recovered</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{item + 1}</td>
                                        <td>{item.country}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </div>
                            </div>
                        )
                    })}


                </div>


            </div>

        )
    }

}
export default NavigationBar;