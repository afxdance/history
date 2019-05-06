import * as React from "react";
import { Year } from "src/data/types";
import * as AFX from "src/data/data";
import { SemLinkComponent } from "./SemLinkComponent";

export interface YearCollapsibleComponent {
  year: string;
  OnClick: Function;
}

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

  public click() {
    this.setState({
      show: !this.state.show,
    });
  }

  public render() {
    let curYear: Year = AFX.Years[this.props.year];
    let name: string = curYear.Name;
    console.log(name);
    let semLinks = [];
    for (let semKey of curYear.semCodename) {
      semLinks.push(
        <SemLinkComponent semester={semKey} onClick={this.props.onClick} />
      );
    }

    return (
      <div className="yearItem">
        <button className="yearButton" onClick={this.click.bind(this)}>
          {name}
        </button>
        <div
          className="semLinks"
          style={this.state.show ? {} : { display: "none" }}
        >
          {semLinks}
        </div>
      </div>
    );
  }
}
