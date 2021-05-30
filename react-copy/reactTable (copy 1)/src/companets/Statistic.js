import React, {Component} from 'react';
import axios from "axios";

class Statistic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            globe: [],
            all: []
        }
    }

    componentDidMount() {

        axios.get("https://restcountries.eu/rest/v2/all")
            .then((response) => {
                console.log(response);
                this.setState({
                    globe: response.data
                })
            })

            axios.get("https://api.covid19api.com/summary")
            .then((response) => {
                console.log(response);
                this.setState({
                    all: response.Countries
                })
            })
    }

    render() {
        return (
            <>

                <section>
                    <div className="container-fluid">
                        <div className="row mt-3">
                            <div className="col-12">
                                <table className="table table-striped table-hover table-bordered">
                                    <thead>
                                    <tr className="text-white">
                                        <th>№</th>
                                        <th>Region</th>
                                        <th className="text-primary">Capital</th>
                                        <th className="text-info">subregion</th>
                                        <th className="text-success">nativeName</th>
                                        <th  className="text-warning">Country</th>
                                        <th>Flag</th>
                                        <th  className="text-danger">Total Confirmed</th>
                                    </tr>
                                    </thead>
                                    {this.state.globe.map((item, index) => {
                                        return (
                                            <tbody>
                                            <tr className="text-white">
                                                <td>{(index + 1)}</td>
                                                <td>{item.region}</td>
                                                <td className="text-primary">{item.capital}</td>
                                                <td  className="text-info">{item.subregion}</td>
                                                <td  className="text-success">{item.nativeName}</td>
                                                <td className="text-warning">{item.name}</td>
                                                <td><img className="flag" src={item.flag} alt=""/></td>
                                                <td className="text-danger">{item.population}</td>
                                            </tr>
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

             </>
        );
    }
}

export default Statistic;