import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Footer className="App-footer" year={ 2019 } />
      </div>
    );
  }
}

export default App;
