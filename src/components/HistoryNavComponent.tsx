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
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// export interface HistoryNav {
//   semKey: string;
//   type: string;
// }

export class HistoryNav extends React.Component<{}, { semKey: string; type: string }> {
  //   constructor(props: any) {
  //     super(props);
  //     this.state = {
  //       //TODO: Need to make code so that this selects the most recent semester rather than hard coded
  //       semKey: "rec5XKEgTIG4JPqKB",
  //       type: typeof AFX.Semesters,
  //     };
  //   }

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
  // public openNav = () => {
  //   var sidebar = document.getElementById("sidebar");
  //   var doc = document.getElementById("root");

  //   if (sidebar != null && doc != null) {

  //     //if the sidebar is open, then shift it to the left and expand root div
  //     if (sidebar.style.marginLeft === "0px") {
  //       sidebar.style.marginLeft = "-250px";
  //       doc.style.marginLeft = "0px";

  //     } else {
  //       sidebar.style.marginLeft = "0px";
  //       doc.style.marginLeft = "250px";
  //       doc.style.width = "calc(100%-250px)";

  //     }

  //   }
  // };

  public render() {
    // let board: any = [];
    // let teams: any = [];
    // // Go through all semesters (in chronological order) and display respective board members and teams
    // // for (let semKey in AFX.Semesters) {
    // let currSem: Semester = AFX.Semesters[this.state.semKey];
    // let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
    // if (currBoardKey) {
    //   board.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
    // }
    // if (currSem.teamGroupIds) {
    //   teams.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
    //   // TODO: TeamsComponent, renaming things, string[] mess
    // }
    // }
    return (
      <div>
        <div className="history-nav">
          <div className="year-form">
            <Form>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Choose a year</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2011-2012</option>
                </Input>
              </FormGroup>
            </Form>
          </div>
          <div className="search-button">
            <Searchbar />
          </div>
        </div >
      </div >
    );
  }
}
