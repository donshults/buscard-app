import React, { Component } from 'react';
import Header from '../header';
import MainContent from '../main-content';
import Footer from '../footer/footer'
import './homepage.css';
import Dummy from '../dummy/dummy';

class HomePage extends Component {
  constructor(props) {
    super(props);
    
  }
  state = {};
  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch('/contacts.json')
      .then(rsp => rsp.json())
      .then(allContacts => {
        this.allContacts = allContacts;
        this.setInitialContact();
      });
  }

  setInitialContact = () => {
    if (this.allContacts) {
      //ToDo: make the selection dynamic
      const featuredContact = this.allContacts[0];
      this.setState({ featuredContact });
    }
  };
  render() {
    if (this.state.featuredContact) {
      console.log("in render " + this.state.featuredContact.id);
    }
    let crap = "990";
    return (
      <div className="homePage">
        <Header />
        <Dummy test={crap} />
        <MainContent contact={this.state.featuredContact} />
        <Footer />
      </div>
    )
  }
}

export default HomePage;