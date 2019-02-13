import * as lodash from "lodash";
import * as React from "react";
import * as Data from "src/data/data";
import { Group } from "src/data/types";
import { DisplayUtility } from "./DisplayUtility";
import { SingleTeamComponent } from "./SingleTeamComponent";

// Component containing the entire list/flexbox of teams, displaying each team
// as a SingleTeamComponent
export class TeamsComponent extends React.Component<any> {
  public render() {
    let teamIds: string[] = this.props.teamIds;
    let teams: Group[];
    teams = teamIds.map(id => Data.Groups[id]);
    teams = lodash.sortBy(teams, team => team.name);

    let teamComponents = teams.map(team => (
      <SingleTeamComponent key={team.id} team={team} />
    ));

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
