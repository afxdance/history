import * as React from "react";
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent";
import { PersonComponent } from "src/components/PersonComponent";
import * as AFX from "src/data/data";
import { PersonPosition } from "src/data/types";

// Displays a single member of board, including their picture, and a PersonComponent
export const PersonPositionComponent: React.FC<{
  key: any, personPosition: PersonPosition,
  hoverDisplay: boolean
}> = (props) => {

  let personPosition: PersonPosition = props.personPosition;
  let personComp = (
    <PersonComponent person={AFX.People[personPosition.personIds[0]]} />
  );

  // TODO: convert to ternary ? operators :

  if (personPosition.picture) {
    return (
      <div className="board--member">
        <HoverWrapperComponent
          pp={personPosition}
          hoverDisplay={props.hoverDisplay}
        >
          <img
            className="board--img"
            src={personPosition.picture[0].thumbnails.large.url}
            width="200px"
            height="200px"
          />

          <div className="member-info">
            {personComp}
            <div className="title">{personPosition.positionTitle}</div>
          </div>
        </HoverWrapperComponent>
      </div>
    );
  } else {
    return (
      <div className="board--member">
        <HoverWrapperComponent
          pp={personPosition}
          hoverDisplay={props.hoverDisplay}
        >
          <img
            className="board--img"
            src={"https://i.imgur.com/4qcFzdm.png"}
            width="200px"
            height="200px"
          />
          <div className="overlay">
            <div className="member-info">
              {personComp}
              <div className="title">{personPosition.positionTitle}</div>
            </div>
          </div>
        </HoverWrapperComponent>
      </div>
    );
  }
}
