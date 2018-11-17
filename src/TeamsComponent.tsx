import * as React from "react";

import AFX from "./data";
import { SingleTeamComponent } from "./SingleTeamComponent";
import { DisplayUtility } from './DisplayUtility';

//
export class TeamsComponent extends React.Component<any> {
  public render() {
    let teamIds: string[] = this.props.teamIds;
    console.log(teamIds);
    let teamComponents: any = [];
    for (let team in teamIds) {
      let teamKey: string = teamIds[team];
      teamComponents.push(<SingleTeamComponent team={AFX.Groups[teamKey]} />);
    }

    // Provide a date to label this group if teams for this semester
    let dateStr: string = "";
    if (teamIds.length > 0) {
      dateStr = DisplayUtility.getSemesterString(AFX.Groups[teamIds[0]]);
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
