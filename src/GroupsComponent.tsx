import * as React from "react";
import AFX from "./data";
import { PersonPositionComponent } from "./PersonPositionComponent";

export class GroupsComponent extends React.Component<any> {
  private getSemesterString(group: AFX.Group) {
    if (group.boardSemesterId) {
      let semKey: string = group.boardSemesterId[0];
      let semStr: string = AFX.Semesters[semKey].codename;
      let yearStr: string = semStr.substring(0, 4);
      let lastChar: string = semStr[semStr.length - 1]
      if (lastChar == "a") {
        return "Spring " + yearStr;
      }
      else if (lastChar == "c") {
        return "Fall " + yearStr;
      } else { // to take care of Tech and Founder groups
        return ""
      }
    }
    else if (group.teamSemesterId) {
      let sumSemKey: string = group.teamSemesterId[0];
      let sumSemStr: string = AFX.Semesters[sumSemKey].codename;
      let sumYearStr: string = sumSemStr.substring(0, 4);
      let sumLastChar: string = sumSemStr[sumSemStr.length - 1]
      if (sumLastChar == "b") {
        return "Summer" + sumYearStr;
      }
      else {
        return "";
      }
    }
    else {
      return "";
    }
  }
  public render() {
    let group: AFX.Group = this.props.group;
    // console.log(group);
    //ppComps = personPositionComponents
    let ppComps: any = [];
    if (group.type == "board") {
      if (group.positionIds)
        for (let idx in group.positionIds) {
          let id: string = group.positionIds[idx];
          ppComps.push(
            <PersonPositionComponent personPosition={AFX.PersonPositions[id]} />
          );
        }

      group.boardSemesterId
      return (
        <div className="board">
          <div className="semester--title">
            {this.getSemesterString(group)}
          </div>
          <h2 className="board--title">{group.name}</h2>
          <div className="board--row">{ppComps}</div>
        </div>
      );
    }
    return <div>team</div>;
  }
}
