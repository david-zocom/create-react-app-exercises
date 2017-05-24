import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		<h1>Hello</h1>
		<Number value={256} />
      </div>
		
    );
  }
}

export default App;








