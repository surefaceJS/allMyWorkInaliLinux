import React, {Component} from "react";

class NavigationBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            shungaSol: [],
            tanlanganindex: -1
        }
    }

    render() {



        const oquvchiQoshish = (event) => {

            // eventni PreventDefauld funksiyasi  hodisani default holatini saqlab turish uchun iwlidi;
            event.preventDefault();

            let oquvchiningIsmi = event.target.ism.value;
            let oquvchiningFamilyasi = event.target.familya.value;
            let yoshi = event.target.yosh.value;
            let tell = event.target.tell.value;
            let oqish = event.target.oqishTuri.value;


            //eventni reset funksiyasi inputdegi malumotlani submit bogandan keyin ochirvorish uchun ishlidi
            event.target.reset();


            let yangiobg = {
                oti: oquvchiningIsmi,
                familyasi: oquvchiningFamilyasi,
                yoshiulug: yoshi,
                nomer: tell,
                turi: oqish

            }

            let a = Math.floor(Math.random() * 5 + 1);
            let b = Math.floor(Math.random() * 5 + 2);
            let c = a + b;
            let javob =  prompt(a + ' + ' + b + " = " + "Javobni Kriting..");

                if (javob == c) {
                    if (this.state.tanlanganindex >= 0){
                        this.state.shungaSol[this.state.tanlanganindex] = yangiobg;
                    }else{
                        this.state.shungaSol.push(yangiobg);
                    }
                }else {
                    alert("Javob noto'g'ri...")

                }


            this.setState({
                shungaSol: this.state.shungaSol,
                tanlanganindex: -1
            })




        }


        const ozgartr = (index) => {
            this.setState({
                tanlanganindex: index
            })
        }

        const ochrbTashash = (index) => {
            this.state.shungaSol.splice(index, 1);
            this.setState({
                shunhaSol: this.state.shunhaSol
            })
        }





        return (
            <div>



                <header className="mt-5 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 m-auto">
                                <div className="card border ">
                                    <div className="card-header bg-dark">
                                        <div className="card-body bg-dark">
                                            <form onSubmit={oquvchiQoshish}>
                                                <input type="text" defaultValue={this.state.shungaSol[this.state.tanlanganindex]?.oti} className="form-control mt-3" name="ism" placeholder="Ism"/>
                                                <input type="text"  defaultValue={this.state.shungaSol[this.state.tanlanganindex]?.familyasi} className="form-control mt-3" name="familya" placeholder="Familya"/>
                                                <input type="number" defaultValue={this.state.shungaSol[this.state.tanlanganindex]?.yoshiulug}  className="form-control mt-3" name="yosh" placeholder="Yosh"/>
                                                <input type="number" defaultValue={this.state.shungaSol[this.state.tanlanganindex]?.nomer}  className="form-control mt-3" name="tell" placeholder="+998(..)...-..-.."/>
                                                <select  defaultValue={this.state.shungaSol[this.state.tanlanganindex]?.turi}  className="form-control mt-3" name="oqishTuri" >
                                                    <option value="" className="disabled"></option>
                                                    <option value="grand">Grand</option>
                                                    <option value="cantract">Cantract</option>
                                                </select>
                                                <button type="submit" className="btn btn-success btn-lg d-block w-100 mt-3">Qo'shish</button>
                                            </form>
                                        </div>
                                        <div className="card-footer border shadow">
                                            <table className="table table-striped table-hover table-borderless">
                                                <thead>
                                                    <tr className="text-white">
                                                        <th>№</th>
                                                        <th>Ism / Familya</th>
                                                        <th>Yosh</th>
                                                        <th>Telefon Raqam</th>
                                                        <th>O'qish turi</th>
                                                        <th>Amal</th>
                                                    </tr>
                                                </thead>

                                                {this.state.shungaSol.map((item, index) => {
                                                    return(
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-white">{index + 1}</td>
                                                                <td className="text-white">{item.oti +  " / " + item.familyasi}</td>
                                                                <td className="text-white">{item.yoshiulug}</td>
                                                                <td className="text-white">{item.nomer}</td>
                                                                <td className="text-white">{item.turi}</td>
                                                                <td className="d-flex justify-content-between">

                                                                    <button type="button" className="btn btn-success" onClick={() => {ozgartr(index)}}>Add</button>
                                                                    <button type="button" className="btn btn-danger" onClick={() => {ochrbTashash(index)}}>del</button>

                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}

                                            </table>
                                        </div>
                                    </div>
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