import * as React from "react";
import { Semester } from "src/data/types";
import * as AFX from "src/data/data";

export interface SemLinkComponent {
  semester: string;
  onClick: Function;
}

export class SemLinkComponent extends React.Component<{ semester: string }> {
  public click() {
    this.onClick(this.props.semester);
  }

  public render() {
    const semKey: string = this.props.semester;
    let semester: Semester = AFX.Semesters[semKey];
    // Semester codename is year with a letter(Example 2018a)
    let suffix: string = semester.codename.slice(-1);
    let semName: string = "";
    if (suffix == "a") {
      semName = "Spring " + semester.codename.slice(0, -1);
    } else if (suffix == "b") {
      semName = "Summer " + semester.codename.slice(0, -1);
    } else {
      semName = "Fall " + semester.codename.slice(0, -1);
    }
    return (
      <div>
        <a className="menu-item" href={semKey} onClick={this.click}>
          {semName}
        </a>
        <br />
      </div>
    );
  }
}
