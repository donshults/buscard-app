
import React, { Component } from 'react';
import './App.css';
import HomePage from '../Containers/HomePage';


class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
