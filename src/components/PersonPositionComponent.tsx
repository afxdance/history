import * as React from "react";
import { PersonComponent } from "src/components/PersonComponent";
import * as AFX from "src/data/data";
import { PersonPosition } from "src/data/types";

export class PersonPositionComponent extends React.Component<any> {
  public render() {
    const personPosition: PersonPosition = this.props.personPosition;
    const personComp = (
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
        /*
        <HoverWrapperComponent pp={personPosition}>
          <div className="board--member">
            <img
              className="board--img"
              src={personPosition.picture[0].url}
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
        </HoverWrapperComponent>
        */
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
        /*
        <HoverWrapperComponent pp={personPosition}>
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
        </HoverWrapperComponent>
        */
      );
    }
  }
}
