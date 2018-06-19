
import React, { Component } from 'react';
import './App.css';
import HomePage from '../homepage';


class App extends Component {
  state = {
    userName: "Don Shults",
    userEmail: "don@collaborationsecrets.com",
    userMobilePhone: "503-484-7412"
  }

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
