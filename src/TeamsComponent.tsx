import * as React from "react";

import AFX from "./data";
import { SingleTeamComponent } from "./SingleTeamComponent";

export class TeamsComponent extends React.Component<any> {
  public render() {
    let teamIds: string[] = this.props.teamIds;
    // return <div className="name">{group.name}</div>;
    console.log(teamIds);
    let teamComponents: any = [];
    for (let team in teamIds) {
      let teamKey: string = teamIds[team];
      // console.log("pushing " + teamKey);
      teamComponents.push(<SingleTeamComponent team={AFX.Groups[teamKey]} />);
    }
    return <div>{teamComponents}</div>;
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
