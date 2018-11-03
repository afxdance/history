import * as React from "react";
import AFX from "./data";
import { PersonPositionComponent } from "./PersonPositionComponent";
import { HoverWrapperComponent } from "./HoverWrapperComponent";

export class GroupsComponent extends React.Component<any> {
  public render() {
    let group: AFX.Group = this.props.group;
    //ppComps = personPositionComponents
    let ppComps: any = [];
    for (let idx in group.positionIds) {
      let id: string = group.positionIds[idx];
      ppComps.push(
        <PersonPositionComponent personPosition={AFX.PersonPositions[id]} />
      );
    }
    return (
      <div className="board">
        <h2 className="board--title">{group.name}</h2>
        <div className="board--row">{ppComps}</div>
      </div>
    );
  }
}
