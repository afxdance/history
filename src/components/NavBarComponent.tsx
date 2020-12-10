import * as React from "react";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { HistoryNav } from "./HistoryNavComponent";

// TODO: get rid of callback when we get Alice's code
export const Navigation: React.FC = () => {
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
            <Nav.Link href="#top" onClick={toggleFalse}>
              <span className="nav-text">About</span>
            </Nav.Link>
            <Nav.Link href="#middle" onClick={toggleFalse}>
              <span className="nav-text">Events</span>
            </Nav.Link>
            <NavDropdown
              alignRight
              title={<span className="nav-text">People</span>}
              id="nav-dropdown"
              onClick={toggleFalse}
            >
              <NavDropdown.Item id="board-dropdown" href="#bottom">
                <span className="nav-text">Board</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#trainingteams">
                <span className="nav-text">Teams</span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <button className="search-button" onClick={toggleDisplay}>
                <span className="nav-text">Search</span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      < div
        className="history-cont"
        style={{ display: displayHistory ? "" : "none" }}
      >
        <HistoryNav />
      </div >
    </div>
  );
}
