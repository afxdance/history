import * as React from "react";

import AFX from "./data";

/*
TODO:
- implement director titles
- decide where the program should note the difference between summer and fall teams
- figure out how to organize the information within each box
- how many boxes on each line
- better flex box styling
- better optimization of images loaded -- slow scrolling

*/

export class SingleTeamComponent extends React.Component<any> {
  private isSummerTeam(team: AFX.Group) {
    if (team.teamSemesterId) {
      let semesterKey: string = team.teamSemesterId[0];
      let semesterStr: string = AFX.Semesters[semesterKey].codename;
      return semesterStr[semesterStr.length - 1] == "b";
    } else {
      return false;
    }
  }
  public render() {
    let team: AFX.Group = this.props.team;
    let directorsStr: string = "";

    // Make teams string
    if (team.positionIds) {
      for (let directorIdx in team.positionIds) {
        let directorKey = team.positionIds[directorIdx];
        let dirPersonKey: string = AFX.PersonPositions[directorKey].person[0];
        let directorPerson: AFX.Person = AFX.People[dirPersonKey];
        console.dir("position " + directorPerson.name);
        directorsStr += directorPerson.name;
        if (parseInt(directorIdx) < team.positionIds.length - 1) {
          directorsStr += ", ";
        }
      }
    }
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

          <div className="team--directors">{directorsStr}</div>

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
