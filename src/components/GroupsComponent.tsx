import * as React from "react";
import { PersonPositionComponent } from "src/components/PersonPositionComponent";
import * as Data from "src/data/data";
import { Group } from "src/data/types";
import { DisplayUtility } from 'src/DisplayUtility';

export class GroupsComponent extends React.Component<any> {
  public render() {
    let group: Group = this.props.group;
    // console.log(group);
    //ppComps = personPositionComponents
    let ppComps: any = [];
    if (group.type == "board") {
      if (group.positionIds)
        for (let idx in group.positionIds) {
          let id: string = group.positionIds[idx];
          ppComps.push(
            <PersonPositionComponent personPosition={Data.PersonPositions[id]} />
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
