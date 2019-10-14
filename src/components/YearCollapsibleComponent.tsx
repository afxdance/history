import * as React from "react";
import { Year } from "src/data/types";
import * as AFX from "src/data/data";
import { SemLinkComponent } from "./SemLinkComponent";

export interface YearCollapsibleComponent {
  year: string;
  OnClick: Function;
}

// Makes the component that makes the year button on the menu. When clicked, it should show all of the semesters in that year.
export class YearCollapsibleComponent extends React.Component<
  {
    year: string;
    onClick: Function;
  },
  { show: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
  }

  // This onclick method is for choosing whether or not to display all the semesters in the year.
  public click() {
    this.setState({
      show: !this.state.show,
    });
  }

  public render() {
    let curYear: Year = AFX.Years[this.props.year];
    let name: string = curYear.Name;
    let semLinks = [];
    // We iterate through all of the semesters and make the components for them.
    // We then add them to the list semLinks in order to be displayed.
    for (let semKey of curYear.semCodename) {
      semLinks.push(
        // this component has an onClick prop in order to send it to all of the sem link components
        <SemLinkComponent semester={semKey} onClick={this.props.onClick} />
      );
    }

    return (
      <div className="yearItem">
        <a className="yearButton" onClick={this.click.bind(this)}>
          {name}
        </a>
        <div
          className="semLinks"
          // based off of show(a state of this component) we choose to display all of the semLinks or not
          style={this.state.show ? {} : { display: "none" }}
        >
          {semLinks}
        </div>
      </div>
    );
  }
}
