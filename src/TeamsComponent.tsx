import * as React from "react";
import * as Data from "src/data/data";
import { DisplayUtility } from "./DisplayUtility";
import { SingleTeamComponent } from "./SingleTeamComponent";

//
export class TeamsComponent extends React.Component<any> {
  public render() {
    let teamIds: string[] = this.props.teamIds;
    console.log(teamIds);
    let teamComponents: any = [];
    for (let team in teamIds) {
      let teamKey: string = teamIds[team];
      teamComponents.push(<SingleTeamComponent team={Data.Groups[teamKey]} />);
    }

    // Provide a date to label this group if teams for this semester
    let dateStr: string = "";
    if (teamIds.length > 0) {
      dateStr = DisplayUtility.getSemesterString(Data.Groups[teamIds[0]]);
    }
    return (
      <div>
        <div className="semester--title">{dateStr}</div>
        <h2 className="board-team--title">Teams</h2>
        <div className="teams">{teamComponents}</div>
      </div>
    );
  }
}
