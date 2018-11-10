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
        <div className="board--member">
          <img
            className="board--img"
            src={personPosition.picture[0].thumbnails.large.url}
            width="200px"
            height="200px"
          />
          <div className="overlay">
            <div className="member-info">
              {personComp}
              <p className="title">{personPosition.positionTitle}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="board--member">
          <img
            className="board--img"
            src={"https://i.imgur.com/4qcFzdm.png"}
            width="200px"
            height="200px"
          
          />
          <div className="overlay">
            <div className="member-info">
              {personComp}
              <p className="title">{personPosition.positionTitle}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
