import '../../scss/navbar.scss';
import React, { Component } from 'react';
import { Nav, Navbar as BSNavbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


class Navbar extends Component {
  render() {
    return (
      <BSNavbar>
        <BSNavbar.Header>
          <BSNavbar.Brand>
            <Link to="/">Boilerplate</Link>
          </BSNavbar.Brand>
          <BSNavbar.Toggle />
        </BSNavbar.Header>
        <BSNavbar.Collapse>
          <Nav>
            <NavItem to="/about" href="/about" componentClass={Link}>About</NavItem>
          </Nav>
        </BSNavbar.Collapse>
      </BSNavbar>
    );
  }
}

export default Navbar;
