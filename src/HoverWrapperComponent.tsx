import * as React from "react";
import AFX from "./data";
import { PersonPositionComponent } from "./PersonPositionComponent";
import { PersonComponent } from "./PersonComponent";

//prop = personposition
export class HoverWrapperComponent extends React.Component<any> {
  public render() {
    // Takes in persson position component
    // <div hover over thing>
    // dipslay person position
    // </dvi>
    // let personPosition: AFX.PersonPosition = this.props.personPosition;
    // let personComp = (
    //   <PersonComponent person={AFX.People[personPosition.person[0]]} />
    // );

    return (
      <span className="HoverWrapper">
        <span className="HoverWrapper-inline">{this.props.children}</span>
        <span className="HoverWrapper-content">Blah</span>
      </span>
    );
  }
}
