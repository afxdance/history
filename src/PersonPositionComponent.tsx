import * as React from "react";
import AFX from "./data";
import { PersonComponent } from "./PersonComponent";

export class PersonPositionComponent extends React.Component<any> {
  public render() {
    let personPosition: AFX.PersonPosition = this.props.personPosition;
    let personComp = (
      <PersonComponent person={AFX.People[personPosition.person[0]]} />
    );
    if (personPosition.picture) {
      return (
        <div>
          {personComp}
          <p>{personPosition.positionTitle}</p>
          <img src={personPosition.picture[0].url} width="200px" />
        </div>
      );
    } else {
      return (
        <div>
          {personComp}
          <p>{personPosition.positionTitle}</p>
          <p>No picture :(</p>
        </div>
      );
    }
  }
}
