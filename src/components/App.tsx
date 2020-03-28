import * as React from "react";
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

export interface App {
  semKey: string;
  type: string;
}

export class App extends React.Component<{}, { semKey: string; type: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      //TODO: Need to make code so that this selects the most recent semester rather than hard coded
      semKey: "rec5XKEgTIG4JPqKB",
      type: typeof AFX.Semesters,
    };
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
    let groups: any = [];
    // Go through all semesters (in chronological order) and display respective board members and teams
    // for (let semKey in AFX.Semesters) {
    let currSem: Semester = AFX.Semesters[this.state.semKey];
    let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
    if (currBoardKey) {
      groups.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
    }
    if (currSem.teamGroupIds) {
      groups.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
      // TODO: TeamsComponent, renaming things, string[] mess
    }
    // }
    return (
      <div>
        <div id="middle">
          <div id="events">
            <h1>EVENTS</h1>
            <br>
          </div>
          </div>

          <div id="bottom">
            <div id="history">
              <h1>HISTORY</h1>
              <br>
                <Navigation />
                <Sidebar onClick={this.myCallback} />
                <Button className='togglebutton' onClick={this.openNav}>
                  <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <Searchbar />
                <p id="big-link">
                  <a href="#trainingteams">Training Teams &nbsp; &nbsp; &nbsp;</a>
                  <a href="#projectteams"> Project Teams </a>
                </p>
                {groups}
          </div>
            </div>
          </div>
    );
  }
}
