import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CartItems from './CartItems';
import AddItem from './AddItem';

class App extends Component {
  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }
  addItemOnSubmit = e => {
    e.preventDefault();
    let itemToBeAdded;
    this.state.products.map( newProduct => {
      if (newProduct.name === e.target.products.value) {
        itemToBeAdded = {
          product: {
            id: newProduct.id,
            name: newProduct.name,
            priceInCents: newProduct.priceInCents               
          },
          quantity: e.target.quantity.value
        }
        console.log(itemToBeAdded)
      }
    });
    this.setState({ cartItemsList: this.state.cartItemsList.concat( itemToBeAdded )})
  }
  render() {
    let total = 0;
    this.state.cartItemsList.map( item => { 
      total += item.product.priceInCents * item.quantity 
    })
    console.log(total);
    return (
      <div>
        <Header />
        <CartItems 
          cart={ this.state.cartItemsList }
          total={ total / 100 } />   
        <AddItem 
          products={ this.state.products } 
          newItem={ this.addItemOnSubmit } />
        <Footer year={ 2019 } />
      </div>
    );
  }
}

export default App;
