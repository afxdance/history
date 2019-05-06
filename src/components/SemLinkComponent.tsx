import * as React from "react";
import { Semester } from "src/data/types";
import * as AFX from "src/data/data";

export interface SemLinkComponent {
  semester: string;
  OnClick: Function;
}

export class SemLinkComponent extends React.Component<{
  semester: string;
  onClick: Function;
}> {
  // constructor(props: any) {
  //   super(props);
  //   this.onClick = this.onClick.bind(this);
  // }

  public click() {
    this.props.onClick(this.props.semester);
  }

  public render() {
    const semKey: string = this.props.semester;
    let semester: Semester = AFX.Semesters[semKey];
    // Semester codename is year with a letter(Example 2018a)
    let suffix: string = semester.codename.slice(-1);
    // let year: string = "";
    let semName: string = "";
    if (semester.codename == "2011") {
      semName = "Founders 2011-2012";
    } else if (suffix == "a") {
      semName = "Spring " + semester.codename.slice(0, -1);
    } else if (suffix == "b") {
      semName = "Summer " + semester.codename.slice(0, -1);
    } else {
      semName = "Fall " + semester.codename.slice(0, -1);
    }

    return (
      <div>
        <button className="menu-item" onClick={this.click.bind(this)}>
          {semName}
        </button>
        <br />
      </div>
    );
  }
}
