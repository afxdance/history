import * as React from "react";
import AFX from "./data";
import { PersonPositionComponent } from "./PersonPositionComponent";
import { DisplayUtility } from "./DisplayUtility"

export class GroupsComponent extends React.Component<any> {
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

      // No longer displays group.name -- instead we display the semesters, and then the board and team labels

      return (
        <div className="board">
          <div className="semester--title">
            {DisplayUtility.getSemesterString(group)}
          </div>
          {/* <h2 className="board--title">{group.name}</h2> */}
          <h2 className="board-team--title">Board Members</h2>
          <div className="board--row">{ppComps}</div>
        </div>
      );
    }
    return <div>team</div>;
  }
}


// import * as React from "react";
// import AFX from "./data";
// import { PersonPositionComponent } from "./PersonPositionComponent";

// export class GroupsComponent extends React.Component<any> {
//   public render() {
//     let group: AFX.Group = this.props.group;
//     //ppComps = personPositionComponents
//     let ppComps: any = [];
//     for (let idx in group.positionIds) {
//       let id: string = group.positionIds[idx];
//       ppComps.push(
//         <PersonPositionComponent personPosition={AFX.PersonPositions[id]} />
//       );
//     }
//     return (
//       <div className="board">
//         <h2 className="board--title">{group.name}</h2>
//         <div className="board--row">{ppComps}</div>
//       </div>
//     );
//   }
// }
