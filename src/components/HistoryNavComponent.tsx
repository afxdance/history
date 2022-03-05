import * as React from "react";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
import "./App.css";
import { Navigation } from "./NavBarComponent";
import { Searchbar } from "./SearchbarComponent";
import { FormGroup, Label, Input, FormText, NavLink } from "reactstrap";
import { SemLinkComponent } from "src/components/SemLinkComponent";
import { ButtonGroup } from "reactstrap";
import { FormControl } from 'react-bootstrap';

export interface HistoryNav {
  OnClick: Function;
}

// TODO: Get rid of OnClick and get function from context.
export const HistoryNav: React.FC = () => {

  const [type, setType] = React.useState(typeof AFX.Semesters);
  const [sems, setSems] = React.useState(null);


  const displaySems = (e: any) => {
    let curYear: Year = AFX.Years[e.target.value];
    let semButtons: any = [];
    for (let semKey of curYear.semCodename) {
      semButtons.push(<SemLinkComponent semKey={semKey} />);
    }
    setSems(semButtons);
  }

  let yearLinks: object[] = [];
  // yearLinks.push(<option>Select a year</option>);
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
              <FormControl as="select" size="sm" onChange={e => displaySems(e)}>
                {yearLinks}
              </FormControl>
            </FormGroup>
          </div>
          <ButtonGroup className="col-sm sem-col">
            <div className="sem-container">{sems}</div>
          </ButtonGroup>
          <div className="col-sm">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}
