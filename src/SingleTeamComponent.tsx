import * as React from "react";
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent";
import * as Data from "src/data/data";
import { Group, Person } from "src/data/types";

// One box in the grid of teams, containing team names, directors, team picture and performance link
export class SingleTeamComponent extends React.Component<any> {
  public render() {
    let team: Group = this.props.team;
    let directorsList: React.ReactNode[] = ["Directors: "];

    // Generate a string of all of the directors
    if (team.positionIds) {
      for (let directorIdx in team.positionIds) {
        let directorKey = team.positionIds[directorIdx];
        let pp = Data.PersonPositions[directorKey];
        let dirPersonKey: string =
          Data.PersonPositions[directorKey].personIds[0];
        let directorPerson: Person = Data.People[dirPersonKey];
        directorsList.push(
          <HoverWrapperComponent pp={pp}>
            {directorPerson.name}
          </HoverWrapperComponent>
        );

        // for the last director, don't add the comma
        if (parseInt(directorIdx) < team.positionIds.length - 1) {
          directorsList.push(", ");
        }
      }
    }

    //Getting the level(Project, Training, etc.) in order to display later(if it exists)
    let teamlvl = "";
    if (team.level) {
      teamlvl = "AFX " + team.level + " team";
    }

    // return a single team element with optional picture displays and video links
    return (
      <div className={"team--single"}>
        <div className="team--name">{team.name}</div>

        {team.teamPicture ? (
          <img
            className="team--img"
            src={team.teamPicture[0].thumbnails.large.url}
          />
        ) : (
          <img
            className="team--img"
            src="afx2.png"
            height={200}
            style={{ opacity: 0.3 }}
          />
        )}

        {teamlvl ? <div className="team--level"> {teamlvl} </div> : undefined}

        <div className="team--directors">{directorsList}</div>

        {team.videoUrl ? (
          <div>
            {
              <a className="video--link" href={team.videoUrl} target="_blank">
                Watch {team.name} on YouTube
              </a>
            }
          </div>
        ) : (
          undefined
        )}
        <div id="team--triangle" />
      </div>
    );
  }
}
