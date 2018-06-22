import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import MainContent from '../Components/MainContent/MainContent';
import Footer from '../Components/Footer/Footer'
import './Homepage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);    
  }

  state = {
    featuredContact: {id:1,businessOwner:"Don"}
  };

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch('/contacts.json')
      .then(rsp => rsp.json())
      .then(allContacts => {
        this.allContacts = allContacts;
        this.setInitialContact(this.allContacts);     
      });
  }

  setInitialContact = () => {
    if (this.allContacts) {
      //ToDo: make the selection dynamic
      const contact = this.allContacts[0];
      this.setState( {featuredContact: contact} );
    }
  }

  render() {

    console.log("in render " + this.state.featuredContact.businessOwner);

    return (
      <div className="homePage">
        <Header />
        <MainContent featuredContact={this.state.featuredContact} />
        <Footer />
      </div>
    )
  }
}

export default HomePage;