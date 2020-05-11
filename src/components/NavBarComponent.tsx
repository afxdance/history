import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import icon from "./afx2.png";
// import ReactBootstrapStyle from 'react-bootstrap/s;
import { HistoryNav } from "./HistoryNavComponent";

export interface Navigation {
  callback: Function;
}

export class Navigation extends React.Component<
  { callback: Function },
  { displayHistory: any }
  > {
  constructor(props: any) {
    super(props);
    this.state = {
      displayHistory: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.toggleFalse = this.toggleFalse.bind(this);
  }

  toggleFalse() {
    this.setState({
      displayHistory: false,
    });
  }

  calcHeight() {
    var navBar = document.getElementById("nav-bar");
    var hist = document.getElementById("history-id");
    if (navBar && hist) {
      hist.style.top = navBar.offsetHeight + 1 + "px";
      var dropdown: HTMLCollectionOf<
        HTMLElement
      > = document.getElementsByClassName("dropdown-menu") as HTMLCollectionOf<
        HTMLElement
      >;
      if (dropdown && dropdown[0] && window.innerWidth <= 990) {
        hist.style.top =
          navBar.offsetHeight - dropdown[0].offsetHeight + 1 + "px";
      }
    }
  }

  toggleDisplay() {
    this.calcHeight();
    this.setState({ displayHistory: !this.state.displayHistory });
  }

  public render() {
    return (
      <div id="big-nav">
        <Navbar
          collapseOnSelect
          fixed="top"
          className="navbar-custom"
          expand="lg"
          variant="dark"
          id="nav-bar"
        >
          <Navbar.Brand href="#">
            <span className="nav-text">AFX Dance</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={this.toggleFalse}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-custom">
              <Nav.Link href="#top" onClick={this.toggleFalse}>
                <span className="nav-text">About</span>
              </Nav.Link>
              <Nav.Link href="#middle" onClick={this.toggleFalse}>
                <span className="nav-text">Events</span>
              </Nav.Link>
              <Nav.Link className="search-button">
                <button className="s-button" onClick={this.toggleDisplay}>
                  <span className="nav-text">Search</span>
                </button>
              </Nav.Link>
              <NavDropdown
                alignRight
                title={<span className="nav-text">People</span>}
                id="nav-dropdown"
                onClick={this.toggleFalse}
              >
                <NavDropdown.Item href="#bottom">
                  <span className="nav-text">Board</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#trainingteams">
                  <span className="nav-text">Teams</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <div
          className="history-cont"
          style={{
            display: this.state.displayHistory ? "" : "none",
          }}
        >
          <HistoryNav OnClick={this.props.callback} />
        </div>
      </div>
    );
  }
}
