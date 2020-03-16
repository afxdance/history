import * as React from "react";
import { Semester } from "src/data/types";
import * as AFX from "src/data/data";
import { Link } from "react-router-dom";

export interface SemLinkComponent {
  semester: string;
  OnClick: Function;
}

//Component that creates the buttons that when clicked show the correct semester on the page
export class SemLinkComponent extends React.Component<{
  semester: string;
  onClick: Function;
}> {
  // If the component is clicked, we want to send the semester key/ID all the way back to App.tsx.
  // This way we can render the correct semester on the page. Yay!
  public click() {
    this.props.onClick(this.props.semester);
    const myElement = document.getElementById('top')!;
    myElement.scrollIntoView();
  }

  public render() {
    const semKey: string = this.props.semester;
    let semester: Semester = AFX.Semesters[semKey];
    // Semester codename is year with a letter(Example 2018a)
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

    // small note. For some reason with react, methods aren't able to naturally find "this"
    // or the component calling the method. As a result, you have to bind "this" to the method
    // explicitly. Do this with this.methodName.bind(this) like below.
    return (
      <div>
        <Link to="/" className="menu-item" onClick={this.click.bind(this)}>
          {semName}
        </Link>
        <br />
      </div>
    );
  }
}
