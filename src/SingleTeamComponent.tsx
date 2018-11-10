import * as React from "react";

import AFX from "./data";

export class SingleTeamComponent extends React.Component<any> {
  private isSummerTeam(team: AFX.Group) {
    if (team.teamSemesterId) {
      let semesterKey: string = team.teamSemesterId[0];
      let semesterStr: string = AFX.Semesters[semesterKey].codename;
      console.log("SEMESTER " + semesterStr);
      return semesterStr[semesterStr.length - 1] == "b";
    } else {
      return false;
    }
  }
  public render() {
    let team: AFX.Group = this.props.team;
    team.teamSemesterId;
    // return <div className="name">TEAM</div>;
    // return <div>{team.name}</div>;
    if (team.teamPicture && team.videoUrl) {
      return (
        <div
          className={
            !this.isSummerTeam(team) ? "team--single" : "team--single--summer"
          }
        >
          <div className="team--name">{team.name}</div>

          <img
            className="team--img"
            src={team.teamPicture[0].url}
            // width="200px"
            // height="200px"
            // color="#24ae24"
          />

          <div>
            <a href={team.videoUrl}>Watch {team.name} on YouTube!</a>
          </div>
        </div>
      );
    } else {
      return <div>{team.name}</div>;
    }
  }
}
