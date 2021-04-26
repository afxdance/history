import * as React from "react";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { HistoryNav } from "./HistoryNavComponent";

import { NavLink } from "react-router-dom";

// TODO: get rid of callback when we get Alice's code
export const Navigation: React.FC<{ searchable: boolean }> = ({ searchable }) => {
  const [displayHistory, setDisplayHistory] = React.useState<boolean>(false);

  function toggleFalse() {
    setDisplayHistory(false);
  }

  function calcHeight() {
    const navBar = document.getElementById("nav-bar");
    const hist = document.getElementById("history-id");
    if (navBar && hist) {
      hist.style.top = navBar.offsetHeight + 1 + "px";
      const dropdown: HTMLCollectionOf<
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

  function toggleDisplay() {
    calcHeight();
    setDisplayHistory(!displayHistory);
  }

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
          <img
            src={require('src/afx2.png')}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="AFX logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleFalse}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-custom">
            <NavLink to="/about" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-text">About</span>
            </NavLink>
            <NavLink to="/events" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-text">Events</span>
            </NavLink>
            <NavDropdown
              alignRight
              title={<span className="nav-text">People</span>}
              id="nav-dropdown"
              className="navlink-custom"
              onClick={toggleFalse}
            >
              <NavDropdown.Item id="dropdown-bar">
                <NavLink className="nav-text" to="/board">Board</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item id="dropdown-bar" to="/teams">
                <NavLink className="nav-text" to="/teams">Teams</NavLink>
                {/* <span className="nav-text">Teams</span> */}
              </NavDropdown.Item>
              <NavDropdown.Item id="dropdown-bar">
                <NavLink className="nav-text" to="/afxtech">AFX Tech</NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            {searchable &&
              <Nav.Link className="navlink-custom">
                <button className="search-button" onClick={toggleDisplay}>
                  <span className="nav-text">Search</span>
                </button>
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <div
        className="history-cont"
        style={{ display: displayHistory ? "" : "none" }}
      >
        <HistoryNav />
      </div >
    </div>
  );
}
