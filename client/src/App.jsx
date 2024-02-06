import { Component } from "react";
import List from "./Components/List/List"
class App extends Component {
    state = {
        newProduct: {
            name: "",
            price: ""
        },
        products: [
            {
                id:1,
                name: "TV",
                price: 2000
            }
        ]
    }
    handleDeleteProduct = (idToDelete) => {
        const updatedList = this.state.products.filter(el => el.id !== idToDelete)
        this.setState({
            ...this.state,
            products: [
                ...updatedList
            ]
        })
    }
    handleChangeInput = (type, value) => {
        this.setState({
            ...this.state,
            newProduct: {
                ...this.state.newProduct,
                [type]: value
            }
        })
    }
    handleCreateProduct = () => {
        this.setState({
            ...this.state,
            products: [
                ...this.state.products,
                {
                    ...this.state.newProduct,
                    id: this.state.products.length
                }
            ],
            newProduct: {
                name: "",
                price: ""
            }
        })
    }
    render () {
        return (
            <>
            <input 
            onChange={(e) => this.handleChangeInput("name", e.target.value)}
            value={this.state.newProduct.name}
            placeholder="Write name"/>
            <input 
            onChange={(e) => this.handleChangeInput("price", e.target.value)}
            value={this.state.newProduct.price}
            placeholder="Write price"/>
            <button onClick={this.handleCreateProduct}>Create</button>
            <List
                handleDeleteProduct = {this.handleDeleteProduct}
                products = {this.state.products}
            />
            </>
        )
    }
}
export default App