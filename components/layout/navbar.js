import React, { Component } from "react";
import Link from "next/link";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,

} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar dark expand="md" className="elegant-color-dark mw-100 sticky-top">
        <MDBNavbarBrand>
          <strong className="white-text">Pella Bionic Dutch</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/">
                <a className="nav-link">Sponsors</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/shop">
                <a className="nav-link">Store</a>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <Link href="/">
                <a className="nav-link waves-effect waves-light">   
                  Sign In </a>
              </Link>
            </MDBNavItem>
       
            <MDBNavItem>
              <Link href="/">
                <a className="nav-link waves-effect waves-light">Sign Up</a>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
