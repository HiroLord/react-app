import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      message: "",
    }
  }

  componentWillMount() {
    console.log("Getting thing...");
    axios.get('http://localhost:4000').then((result) => {
      console.log(result.data);
      this.setState({
        message: result.data,
      });
    }).catch((err) => {

    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>{this.state.message}</h3>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
