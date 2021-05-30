import React, {Component} from 'react';

class LessonQirq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedIndex: -1
        }
    }


    render() {
        const addProduct = (event) => {
            event.preventDefault();

            let productName = event.target.productName.value;
            let productPrice = event.target.productPrice.value;
            let productColor = event.target.productColor.value;

            event.target.reset();
            // formani tozalash uchun

            let newProduct = {
                name: productName,
                price: productPrice,
                color: productColor,
            }

            if (this.state.selectedIndex >= 0){
                this.state.products[this.state.selectedIndex] = newProduct;

            } else {
                this.state.products.push(newProduct);
            }

            this.setState({
                products: this.state.products,
                selectedIndex: -1
            })

        }

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({
                products: this.state.products
            })
        }

        const editProduct = (index) => {
            this.setState({
                selectedIndex: index
            })
        }

        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={addProduct}>
                                        <input type="text" defaultValue={this.state.products[this.state.selectedIndex]?.name} className="form-control" name="productName" placeholder="Product name"/>

                                        <input type="number" defaultValue={this.state.products[this.state.selectedIndex]?.price} className="form-control mt-3" name="productPrice" placeholder="Product price"/>

                                        <input type="color" defaultValue={this.state.products[this.state.selectedIndex]?.color} className="mt-3 form-control" name="productColor"/>
                                        <button type="submit" className="btn btn-success mt-3 d-block ml-auto">Add</button>
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
                                                    <p>Color: <b style={{color: item.color}}>{item.color}</b></p>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between">
                                                    <button type="button" className="btn btn-primary" onClick={() => {editProduct(index)}}>Edit</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => {deleteProduct(index)}}>Delete</button>
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
        );
    }
}

export default LessonQirq;