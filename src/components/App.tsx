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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";
import { type } from "os";
import { HistoryNav } from "./HistoryNavComponent";
import { EventsComponent } from 'src/components/EventsComponent';

export interface App {
  semKey: string;
  type: string;
  display: any;
}

export class App extends React.Component<
  {},
  { semKey: string; type: string; display: any }
  > {
  navRef: React.RefObject<unknown>;
  constructor(props: any) {
    super(props);
    this.state = {
      //TODO: Need to make code so that this selects the most recent semester rather than hard coded
      semKey: "rec4GaaU2uP8FRfw3",
      type: typeof AFX.Semesters,
      display: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.checkHistory = this.checkHistory.bind(this);
    this.navRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkHistory);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkHistory);
  }

  checkHistory() {
    let windowHeight = window.innerHeight;
    var history = document.getElementById("bottom")?.getBoundingClientRect();
    let historyTop = 0;
    if (history != null) {
      historyTop = history.top;
    }
    if (historyTop <= 0 && this.state.display == false) {
      console.log("in check history")
      this.toggleSearch("enter");
    } //else if (historyTop > 0 && this.state.display == true) {
    //   this.toggleSearch("exit");
    // }
  }

  toggleSearch(type: String) {
    if (type === "enter") {
      this.setState({
        display: true,
      });
    }
    // else if (type === "exit") {
    //   this.setState({
    //     display: false,
    //   })
    // }
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
    return (
      <div>
        <div className={this.state.display ? "show-Search" : "no-Search"}>
          <Navigation callback={this.myCallback} />
        </div>
        <div id="top" className="anchor">
          <AboutComponent />
        </div>
        <div id="middle" className="anchor">
          <div id="events">
            <h1>EVENTS</h1>
            <EventsComponent />
            <br />
          </div>
        </div>
        <div id="bottom" className="anchor">
          <div id="history">
            <h1>HISTORY</h1>
            <br />
            <div id="board">{board}</div>
            <div id="teams">{teams}</div>
          </div>
        </div>
      </div>
    );
  }
}
