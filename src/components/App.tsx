import * as React from "react";
import { AboutComponent } from "./AboutComponent";
import { GroupsComponent } from "src/components/GroupsComponent";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import * as AFX from "src/data/data";
import { Semester } from "src/data/types";
import { TeamsComponent } from "src/TeamsComponent";
import "./App.css";
import { Navigation } from "./NavBarComponent";
import { Sidebar } from "./SidebarComponent";
import { Searchbar } from "./SearchbarComponent";
import { IndividualComponent } from "./IndividualComponent";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { render } from "react-dom";
import { type } from "os";
import { HistoryNav } from './HistoryNavComponent';

export interface App {
  semKey: string;
  type: string;
  display: any;
}

export class App extends React.Component<{}, { semKey: string; type: string; display: any }> {
  navRef: React.RefObject<unknown>;
  constructor(props: any) {
    super(props);
    this.state = {
      //TODO: Need to make code so that this selects the most recent semester rather than hard coded
      semKey: "rec5XKEgTIG4JPqKB",
      type: typeof AFX.Semesters,
      display: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.navRef = React.createRef();
  }

  toggleSearch(e: React.MouseEvent, type: String) {
    if (type === "enter") {
      this.setState({
        display: true,
      })
    }
    else if (type === "exit") {
      // Only removes display state if user is still in window
      // console.log("Mouse coords: ", e.screenX, e.screenY);
      // console.log("Window coords: ", window.innerWidth, window.innerHeight);
      if ((e.screenX >= 0 && e.screenX <= window.innerWidth) &&
        (e.screenY >= 0 && e.screenY <= window.innerHeight)) {
        this.setState({
          display: false,
        })
      }
    }
  }

  showSettings(event: React.MouseEvent) {
    event.preventDefault();
  }

  // Method that gets the semester ID of the semester clicked on the side meny
  public myCallback = (groupID: string) => {
    this.setState({
      semKey: groupID,
    });
  };


  //Toggle method for the sidebar toggle function
  public openNav = () => {
    var sidebar = document.getElementById("sidebar");
    var doc = document.getElementById("root");

    if (sidebar != null && doc != null) {

      //if the sidebar is open, then shift it to the left and expand root div
      if (sidebar.style.marginLeft === "0px") {
        sidebar.style.marginLeft = "-250px";
        doc.style.marginLeft = "0px";

      } else {
        sidebar.style.marginLeft = "0px";
        doc.style.marginLeft = "250px";
        doc.style.width = "calc(100%-250px)";

      }

    }
  };

  public render() {
    let board: any = [];
    let teams: any = [];
    // Go through all semesters (in chronological order) and display respective board members and teams
    // for (let semKey in AFX.Semesters) {
    let currSem: Semester = AFX.Semesters[this.state.semKey];
    let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
    if (currBoardKey) {
      board.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
    }
    if (currSem.teamGroupIds) {
      teams.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
      // TODO: TeamsComponent, renaming things, string[] mess
    }

    let normalNav: any = [];
    let historyNav: any = [];
    if (this.state.display) {
      historyNav.push(<Navigation searchDisplay={this.state.display} />);
    } else {
      normalNav.push(<Navigation searchDisplay={this.state.display} />);
    }
    return (
      <div>
        {normalNav}
        <div id="top">
          <AboutComponent />
        </div>
        <div id="middle">
          <div id="events">
            <h1>EVENTS</h1>
            <br></br>
          </div>
        </div>
        <div id="bottom" onMouseEnter={e => this.toggleSearch(e, "enter")} onMouseLeave={e => this.toggleSearch(e, "exit")}>
          {historyNav}
          <div id="history">
            <h1>HISTORY</h1>
            <br></br>
            {/* <Sidebar onClick={this.myCallback} />
            <Button className='togglebutton' onClick={this.openNav}>
              <FontAwesomeIcon icon={faAlignLeft} />
            </Button> */}
            {/* <Searchbar /> */}
            <div id="board">
              {board}
            </div>
            <div id="teams">
              {teams}
            </div>
          </div>
        </div>
      </div >
    );
  }
}
