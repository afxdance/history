import * as React from "react";
import { PersonPositionComponent } from "src/components/PersonPositionComponent";
import * as Data from "src/data/data";
import { Group } from "src/data/types";

export class GroupsComponent extends React.Component<any> {
  public render() {
    const group: Group = this.props.group;

    const ppComps = [];
    for (const idx in group.positionIds) {
      const id: string = group.positionIds[idx];
      ppComps.push(
        <PersonPositionComponent personPosition={Data.PersonPositions[id]} />
      );
    }
    return (
      <div className="board">
        <div className="board--title">{group.name}</div>
        <div className="board--row">{ppComps}</div>
      </div>
    );
  }
}
