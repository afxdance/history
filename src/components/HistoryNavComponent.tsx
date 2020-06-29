import * as React from "react";
import { AboutComponent } from "./AboutComponent";
import { GroupsComponent } from "src/components/GroupsComponent";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
import { Semester } from "src/data/types";
import { TeamsComponent } from "./TeamsComponent";
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
import { FormGroup, Label, Input, FormText, NavLink } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { SemLinkComponent } from "src/components/SemLinkComponent";
import { ButtonGroup } from "reactstrap";

export interface HistoryNav {
  OnClick: Function;
}

export class HistoryNav extends React.Component<
  { OnClick: Function },
  { type: string; sems: any }
  > {
  constructor(props: any) {
    super(props);
    this.state = {
      //TODO: Need to make code so that this selects the most recent semester rather than hard coded
      type: typeof AFX.Semesters,
      sems: null,
    };
  }

  displaySems(e: any) {
    let curYear: Year = AFX.Years[e.target.value];
    let semButtons: any = [];
    for (let semKey of curYear.semCodename) {
      semButtons.push(
        <SemLinkComponent semester={semKey} onClick={this.props.OnClick} />
      );
    }
    this.setState({ sems: semButtons });
  }

  public render() {
    let yearLinks: object[] = [];
    yearLinks.push(<option>Select a year</option>);
    for (let year of Object.keys(AFX.Years)) {
      let curYear: Year = AFX.Years[year];
      let name: string = curYear.Name;
      yearLinks.push(<option value={year}>{name}</option>);
    }

    return (
      <div id="history-id" className="history-nav">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <FormGroup>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={e => this.displaySems(e)}
                >
                  {yearLinks}
                </Input>
              </FormGroup>
            </div>
            <ButtonGroup className="col-sm sem-col">
              <div className="sem-container">{this.state.sems}</div>
            </ButtonGroup>
            <div className="col-sm">
              <Searchbar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
