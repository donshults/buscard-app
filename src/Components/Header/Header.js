import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import './Header.css';

const Header = (props) => {
  /*
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
  */
  let isOpen = true;
  return (
    <div className="header" >
      <Navbar dark expand="md">
        <NavbarBrand href="./">My Contact Info</NavbarBrand>
        <NavbarToggler onClick={()=>{return !isOpen} } />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;