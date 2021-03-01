import * as React from "react"
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent"
import * as Data from "src/data/data"
import { Group, Person } from "src/data/types"

export const SingleTeamComponent: React.FC<{ team: Group }> = ({ team }) => {
  let directorsList: React.ReactNode[] = []
  // Generate a string of all of the directors
  if (team.positionIds) {
    for (let directorIdx in team.positionIds) {
      if (team.positionIds.hasOwnProperty(directorIdx)) { //iterate only over the properties of the object itself
        let directorKey = team.positionIds[directorIdx]
        let pp = Data.PersonPositions[directorKey]
        let dirPersonKey: string =
          Data.PersonPositions[directorKey].personIds[0]
        let directorPerson: Person = Data.People[dirPersonKey]
        directorsList.push(
          pp.picture ? (
            <div className="director">
              <h6>{directorPerson.name}</h6>
              <HoverWrapperComponent pp={pp} hoverDisplay={true}>
                {pp.picture ? (
                  <img
                    className="board--img"
                    src={pp.picture[0].thumbnails.large.url}
                    width="200px"
                    height="200px"
                  />
                ) : (
                  <img
                    className="board--img"
                    src="afx2.png"
                    width="200px"
                    height="200px"
                    style={{ opacity: 0.3 }}
                  />
                )}
                &nbsp;&nbsp;&nbsp;
              </HoverWrapperComponent>
            </div>
          ) : (
            <div className="director">
              <h6>{directorPerson.name}</h6>
              <HoverWrapperComponent pp={pp} hoverDisplay={true}>
                <img
                  className="board--img"
                  src={"https://i.imgur.com/4qcFzdm.png"}
                  width="200px"
                  height="200px"
                />
                &nbsp;&nbsp;&nbsp;
              </HoverWrapperComponent>
            </div>
          )
        )
      }
    }
  }

  // return a single team element with optional picture displays and video links
  return (
    <div className={"team--single"}>
      <div className="team--left">
        <div className="team--name">{team.name}</div>

        {team.teamPicture ? (
          <a
            className="video--link"
            href={team.videoUrl}
            target="_blank"
            title="Click to watch on Youtube!"
          >
            <img
              className="team--img"
              src={team.teamPicture[0].thumbnails.large.url}
            />
          </a>
        ) : (
          <img
            className="team--img"
            src="afx2.png"
            height={200}
            style={{ opacity: 0.3 }}
          />
        )}
      </div>

      <div className="team--directors">
        <div className="director">Directors</div>
        <br />
        <div className="team--list"> {directorsList}</div>
      </div>

      {/* IS THIS SUPPOSED TO BE HERE*/}
      {/* {
        team.videoUrl ? (
          <div>
            {
              <a className="video--link" href={team.videoUrl} target="_blank">
                Watch {team.name} on YouTube
            </a>
            }
          </div>
        ) : (
            undefined
          )
      } */}
      <div id="team--triangle" />
    </div>
  )
}
