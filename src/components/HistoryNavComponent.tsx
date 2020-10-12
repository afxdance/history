import * as React from "react";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
import "./App.css";
import { Searchbar } from "./SearchbarComponent";
import { FormGroup, Label, Input, FormText, NavLink } from "reactstrap";
import { SemLinkComponent } from "src/components/SemLinkComponent";
import { ButtonGroup } from "reactstrap";

export class HistoryNav extends React.Component<
  {},
  { type: string; sems: any }
  > {
  constructor(props: any) {
    super(props);
    this.state = {
      // TODO: Need to make code so that this selects the most recent semester rather than hard coded
      type: typeof AFX.Semesters,
      sems: null,
    };
  }

  public displaySems(e: any) {
    let curYear: Year = AFX.Years[e.target.value];
    let semButtons: any = [];
    for (let semKey of curYear.semCodename) {
      semButtons.push(<SemLinkComponent semKey={semKey} />);
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
