import * as React from "react";
import Navbar from 'react-bootstrap/Navbar'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// import ReactBootstrapStyle from 'react-bootstrap/s;

export class Navigation extends React.Component {
  public render() {
    return (
      <Navbar className="gen-nav navbar-dark navbar-black" bg="dark" fixed="top" expand="lg">
        < Navbar.Brand href="#" > AFX Dance</Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-dark">
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="People" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Executive Board</NavDropdown.Item>
              <NavDropdown.Item href="#">Teams</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}
