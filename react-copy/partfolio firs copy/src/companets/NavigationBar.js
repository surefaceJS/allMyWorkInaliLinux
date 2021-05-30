import React, {Component} from "react";

class NavigationBar extends Component {
    // shotga campanentla yoziladi va  bu funcsiyan qogan joyda bemalol chaqirvose boldi...

    constructor() {
        super();

        this.state ={
            products:[]
        }
    }

    render() {

        const arrayMethods = () => {
            let numberss = [42, -58, 59, 31, -59, 49];

            numberss.forEach((item, index, array) => {
                console.log(item, index, array)
                //item;      ===>    numbers[i];
                //index  ===>   index
            })


          let mapnumbers =  numberss.map((item,index) => {
                return 1

            })
            console.log(mapnumbers)
            let filteredNumber = numberss.filter((iterm, index) => {
                return iterm > 1
            })

            console.log(filteredNumber)


            let sorted = numberss.sort((item1,item2) => {
                return item1 - item2
            })

            console.log(sorted)


        }



        arrayMethods();


        const addProduct = (event) => {

            event.preventDefault();
            let productName = event.target.productName.value;
            let productPrice = event.target.productPrice.value;
            let productColor = event.target.productColor.value;

            event.target.reset();

            let newProduct = {
                name: productName,
                price: productPrice,
                color:productColor
            }

            this.state.products.push(newProduct);
            this.setState({
                products: this.state.products
            })

        }


        const delateProduct = (index) => {
            this.state.products.splice(index,1)
        }
        return (
            <div>


                <div className="container">
                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={addProduct}>
                                        <input type="text" className="form-control" name="productName" placeholder="ProductName"/>
                                        <input type="number" className="form-control mb-3" name="productPrice" placeholder="ProductPrice"/>
                                        <input type="color" className="form-control mb-3" name="productColor" productPrice="ProductColor"/>
                                        <button type="submit" className="btn btn-success mt-3 d-block ml-auto">Click</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {this.state.products.map((item, index) => {
                                    return (
                                        <div className="col-4 mb-3">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>{item.name}</h5>
                                                </div>

                                                <div className="card-body">
                                                    <p>Price: <b>{item.price}</b></p>
                                                    <p>Color: <b>{item.color}</b></p>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between">
                                                    <button type="button" className="btn btn-primary">Edit</button>
                                                    <button type="button" className="btn btn-danger">Delte</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
           
        )
    }

}
export default NavigationBar;