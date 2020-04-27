import * as React from "react";
import { AboutComponent } from "./AboutComponent";
import { GroupsComponent } from "src/components/GroupsComponent";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
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
import { FormGroup, Label, Input, FormText } from 'reactstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

export interface HistoryNav {
  OnClick: Function;
}

export class HistoryNav extends React.Component<{ OnClick: Function; }, { semKey: string; type: string; sems: any; }> {
  constructor(props: any) {
    super(props);
    this.state = {
      //TODO: Need to make code so that this selects the most recent semester rather than hard coded
      semKey: "rec5XKEgTIG4JPqKB",
      type: typeof AFX.Semesters,
      sems: null
    };
  }

  update(semKey: String) {
    this.props.OnClick(semKey);
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

  displaySems(e: any) {
    let curYear: Year = AFX.Years[e.target.value];
    let semButtons: any = [];
    semButtons.push(<span className="nav-text">Select a semester</span>)
    for (let semKey of curYear.semCodename) {
      let semester: Semester = AFX.Semesters[semKey];
      let suffix: string = semester.codename.slice(-1);
      // let year: string = "";
      let semName: string = "";
      // Using string slicing in order to see how we can make the names for the button.
      // tbh should research if there is a better way to do this.
      if (semester.codename == "2011") {
        semName = "Founders 2011-2012";
      } else if (suffix == "a") {
        semName = "Spring " + semester.codename.slice(0, -1);
      } else if (suffix == "b") {
        semName = "Summer " + semester.codename.slice(0, -1);
      } else {
        semName = "Fall " + semester.codename.slice(0, -1);
      }
      semButtons.push(
        <Form.Check type="radio">
          <Form.Check.Input type="radio" name="sem-button" onChange={() => this.update(semKey)}/>
          <Form.Check.Label><span className="nav-text">{semName}</span></Form.Check.Label>
        </Form.Check>
      )
    }
    this.setState(
      { sems: semButtons },
    )
  }


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

  //  }
  // };


  public render() {
    let yearLinks = [];
    yearLinks.push(<option>Select a year</option>)
    for (let year of Object.keys(AFX.Years)) {
      let curYear: Year = AFX.Years[year];
      let name: string = curYear.Name;
      yearLinks.push(<option value={year}>{name}</option>);
    }

    return (
      <div className="history-nav">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => this.displaySems(e)}>
                  {yearLinks}
                </Input>
              </FormGroup>
            </div>
            <div className="col-sm">
              {this.state.sems}
            </div>
            <div className="col-sm">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
