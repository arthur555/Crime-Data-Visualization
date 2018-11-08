import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import logo from './Crime_Map_Logo.jpg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavbarInstance extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img src={logo} className="menu_logo" />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown title="Menu" />
        </Nav>
      </Navbar>
    );
  }
}

class Header extends React.Component {
  render() {
    return <NavbarInstance />;
  }
}

export { Header };
