import * as React from "react";
import * as Data from "src/data/data";
import { DisplayUtility } from "./DisplayUtility";
import { SingleTeamComponent } from "./SingleTeamComponent";

// Component containing the entire list/flexbox of teams, displaying each team
// as a SingleTeamComponent
export class TeamsComponent extends React.Component<any> {
  public render() {
    let teamIds: string[] = this.props.teamIds;
    let teamComponents: any = [];
    for (let team in teamIds) {
      let teamKey: string = teamIds[team];
      teamComponents.push(<SingleTeamComponent team={Data.Groups[teamKey]} />);
    }

    // Provide a date to label this group if there teams for this semester, based on the information of the
    // first team in this semester
    let dateStr: string = "";
    if (teamIds.length > 0) {
      dateStr = DisplayUtility.getSemesterString(Data.Groups[teamIds[0]]);
    }
    return (
      <div>
        <div className="semester--title">{dateStr}</div>
        <div className="board-team--title">Teams</div>
        <div className="teams">{teamComponents}</div>
      </div>
    );
  }
}
