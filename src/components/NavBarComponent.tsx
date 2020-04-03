import * as React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import icon from './afx2.png'
// import ReactBootstrapStyle from 'react-bootstrap/s;

export class Navigation extends React.Component<any> {
  public render() {
    return (
      <Navbar className="navbar-custom" fixed="top" expand="lg">
      {/* // <Navbar className="gen-nav navbar-dark navbar-black" bg="dark" fixed="top" expand="lg"> */}
        {/* <img src={icon} alt=""></img> */}
        <Navbar.Brand href="#"><span className="nav-text">AFX Dance</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-custom">
            <Nav.Link href="#"><span className="nav-text">About</span></Nav.Link>
            <NavDropdown alignRight title={<span className="nav-text">People</span>} id="nav-dropdown">
              <NavDropdown.Item href="#"><span className="nav-dropdown">Executive Board</span></NavDropdown.Item>
              <NavDropdown.Item href="#"><span className="nav-dropdown">Teams</span></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"><span className="nav-text">Events</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



{/* <NavDropdown alignRight title={<span className="nav-text">People</span>} id="nav-dropdown">
<NavDropdown.Item href="#"><span className="nav-dropdown">Executive Board</span></NavDropdown.Item>
<NavDropdown.Item href="#"><span className="nav-dropdown">Teams</span></NavDropdown.Item>
</NavDropdown> */}
