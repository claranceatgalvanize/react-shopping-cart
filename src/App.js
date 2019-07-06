import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CartItems from './CartItems';

class App extends Component {
  render() {

    const cartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]

    return (
      <div className="App">

        <Header className="App-header" />

        <CartItems className="App-cartItems" 
          cart={ cartItemsList } />
          
        <CartItems className="App-cartItems" 
          cart={ cartItemsList } />

        <Footer className="App-footer" 
          year={ 2019 } />

      </div>
    );
  }
}

export default App;
