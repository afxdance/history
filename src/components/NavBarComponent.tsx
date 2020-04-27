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
import { HistoryNav } from './HistoryNavComponent';

export interface Navigation {
  callback: Function;
}

export class Navigation extends React.Component<{ callback: Function; }, { displayHistory: any; }> {
  constructor(props: any) {
    super(props);
    this.state = {
      displayHistory: false
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState(
      { displayHistory: !this.state.displayHistory }
    );
  }

  public render() {
    return (
      <div id="big-nav">
        <Navbar collapseOnSelect fixed="top" className="navbar-custom" expand="lg">
          <Navbar.Brand href="#"><span className="nav-text">AFX Dance</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="search-button">
              <button className="s-button" onClick={this.toggleDisplay}><span className="nav-text">Search</span></button>
            </Nav>
            <Nav className="ml-auto navbar-custom">
              <Nav.Link href="#top"><span className="nav-text">About</span></Nav.Link>
              <NavDropdown alignRight title={<span className="nav-text">People</span>} id="nav-dropdown">
                <NavDropdown.Item href="#bottom"><span className="nav-text">Executive Board</span></NavDropdown.Item>
                <NavDropdown.Item href="#bottom"><span className="nav-text">Teams</span></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#middle"><span className="nav-text">Events</span></Nav.Link>
            </Nav>
          </Navbar.Collapse >
        </Navbar >
        <br></br>
        <div style={{ display: this.state.displayHistory ? '' : 'none' }}>
          <HistoryNav OnClick={this.props.callback} />
        </div>
      </div >
    );
  }
}
