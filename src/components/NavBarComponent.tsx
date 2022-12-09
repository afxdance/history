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
    {/* CHANGE TO fixed="false' TO REMOVE NAVBAR TRANSPARENCY */}
      <Navbar
        collapseOnSelect
        fixed="top"
        className="navbar-custom"
        expand="lg"
        variant="dark"
        id="nav-bar"
      >
        <Navbar.Brand href="#" className="navbar-brand-text">
          <img
            src={require('src/afx2.png')}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="AFX logo"
          />
          <div>
            <h2 style = {{fontSize: 30, paddingLeft: 15}}>AFX <br/> DANCE</h2>
            <h5 style = {{fontSize: 15, paddingLeft: 15}}>est. 2011</h5>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleFalse}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-custom" style={{ justifyContent: "flex-end" }}>

            <NavLink to="/home" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">Home</span>
              <div className="navlink-underline"></div>
            </NavLink>
            <NavLink to="/about" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">About</span>
              <div className="navlink-underline"></div>
            </NavLink>
            <NavLink to="/faq" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">FAQ</span>
              <div className="navlink-underline"></div>
            </NavLink>
            <NavLink to="/events" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">Events</span>
              <div className="navlink-underline"></div>
            </NavLink>
            <NavLink to="/board" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">Board</span>
              <div className="navlink-underline"></div>
            </NavLink>
            <NavLink to="/teams" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">Teams</span>
              <div className="navlink-underline"></div>
            </NavLink>
            <NavLink to="/afxtech" onClick={toggleFalse} className="navlink-custom">
              <span className="nav-item-text nav-text">AFX Tech</span>
              <div className="navlink-underline"></div>
            </NavLink>

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
