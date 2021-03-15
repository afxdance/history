import * as React from "react"
import { HoverWrapperComponent } from "src/components/HoverWrapperComponent"
import * as Data from "src/data/data"
import { Group, Person } from "src/data/types"
import { PersonPositionComponent } from "src/components/PersonPositionComponent"

export const CompComponent: React.FC<{ team: Group }> = ({ team }) => {
  let directorsList: React.ReactNode[] = []
  // Generate a string of all of the directors
  if (team.positionIds) {
    for (let directorIdx in team.positionIds) {
      if (team.positionIds.hasOwnProperty(directorIdx)) { // iterate only over the properties of the object itself
        let directorKey = team.positionIds[directorIdx]
        let pp = Data.PersonPositions[directorKey]
        let dirPersonKey: string =
          Data.PersonPositions[directorKey].personIds[0]
        let directorPerson: Person = Data.People[dirPersonKey]
        directorsList.unshift(
          <PersonPositionComponent personPosition={pp} hoverDisplay={true}/>
        )
      }
    }
  }

  // return a single team element with optional picture displays and video links
  return (
    <div className="comp--single">
      <div className="comp--left">
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
      <div className="comp--directors">
        <div className="director">Directors</div>
        <br />
        <div className="comp--list"> {directorsList}</div>
      </div>
    </div>
  )
}
