import * as React from "react";
import AFX from "./data";
import { PersonPositionComponent } from "./PersonPositionComponent";
import { PersonComponent } from "./PersonComponent";

//prop = personposition
export class HoverWrapperComponent extends React.Component<any> {
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
    let id = "recZFzCcA5n9Tuyij";
    let stooph = AFX.PersonPositions[id];
    let personID = stooph.person[0];
    let person = AFX.People[personID];

    console.log("BUGGGG");
    console.log(person.positionIds);

    let len = person.positionIds.length;

    for (let i = 0; i < len; i++) {
      //Get each personPosition from the person's position IDs
      console.log(i);
      let posID = person.positionIds[i];
      console.log(posID);
      let personPos = AFX.PersonPositions[posID];

      //picture
      let pic_url = "TEST";
      if (personPos.picture) {
        pic_url = personPos.picture[0].url;
      } else {
        pic_url = "https://i.imgur.com/4qcFzdm.png";
      }

      //group name
      let groupID = personPos.group[0];
      let group_name = AFX.Groups[groupID].name;
      let semester = group_name.slice(10, group_name.length);

      //position titles
      let pos_title = personPos.positionTitle;

      // <div className="board--member">
      //   <img
      //     className="board--img"
      //     src={personPosition.picture[0].url}
      //     width="200px"
      //     height="200px"
      //   />
      // </div>

      ret.push(
        <div className="rowOfHover">
          <div className="pictureHover">
            <img src={pic_url} width="150px" height="150px" />
          </div>
          <div className="infoHover">
            {semester}
            {pos_title}
          </div>
        </div>
      );

      //</div>ret.push(["<img src="+ pic_url"", group_name, pos_title]);
    }

    return (
      <span className="HoverWrapper">
        <span className="HoverWrapper-inline">{this.props.children}</span>
        <span className="HoverWrapper-content">{ret}</span>
      </span>
    );
  }
}
