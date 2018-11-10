import * as React from "react";
import AFX from "./data";
import { PersonPositionComponent } from "./PersonPositionComponent";
import { PersonComponent } from "./PersonComponent";

interface HoverWrapperComponentProp {
  pp: AFX.PersonPosition;
}

//prop = personposition
export class HoverWrapperComponent extends React.Component<
  HoverWrapperComponentProp
> {
  public render() {
    // "recZFzCcA5n9Tuyij"

    // Takes in person position component
    // <div hover over thing>
    // dipslay person position
    // </dvi>
    // let personPosition: AFX.PersonPosition = this.props.personPosition;
    // let personComp = (
    //   <PersonComponent person={AFX.People[personPosition.person[0]]} />
    // );

    let ret = [];
    // let id = "recZFzCcA5n9Tuyij";
    // let stooph = AFX.PersonPositions[id];
    let pp: AFX.PersonPosition = this.props.pp;
    // if (this.props.pp == null) {
    //   console.log("NEED NULL CHECK");
    // }
    let personID = pp.person[0];

    let person = AFX.People[personID];

    let len = person.positionIds.length;

    for (let i = len - 1; i >= 0; i--) {
      //Get each personPosition from the person's position IDs
      let posID = person.positionIds[i];
      let personPos = AFX.PersonPositions[posID];

      //picture
      let pic_url = "afx2.png";
      if (personPos.picture) {
        pic_url = personPos.picture[0].url;
      }

      //group name
      let groupID = personPos.group[0];
      let group_name = AFX.Groups[groupID].name;

      let semester = "TEMP";

      //string slicing
      if (group_name.includes("AFX Board")) {
        semester = group_name.slice(10, group_name.length);
      } else if (group_name.includes("AFX Tech")) {
        semester = group_name.slice(9, group_name.length);
      } else {
        semester = group_name.slice(13, group_name.length);
      }

      //position titles
      let pos_title = personPos.positionTitle;

      ret.push(
        <div className="rowOfHover">
          <div className="pictureHover">
            <img className="infoPicHover" src={pic_url} />
          </div>
          <div className="infoHover">{semester}</div>
          <div className="infoHover">{pos_title}</div>
        </div>
      );
    }

    return (
      <span className="HoverWrapper">
        <span className="HoverWrapper-inline">{this.props.children}</span>
        <span className="HoverWrapper-content">
          <h1>{person.name}</h1>
          {ret}
        </span>
      </span>
    );
  }
}
