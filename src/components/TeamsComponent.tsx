import * as lodash from "lodash"
import * as React from "react"
import * as Data from "src/data/data"
import { Group } from "src/data/types"
import { DisplayUtility } from "src/DisplayUtility"
import { SingleTeamComponent } from "./SingleTeamComponent"

// Component containing the entire list/flexbox of teams, displaying each team
// as a SingleTeamComponent
export const TeamsComponent: React.FC<{ teamIds: string[] }> = ({
  teamIds,
}) => {
  let teams: Group[]
  teams = teamIds.map(id => Data.Groups[id])
  teams = lodash.sortBy(teams, team => team.name)

  let projectTeamComponents: any = []
  let trainingTeamComponents: any = []
  for (const team of teams) {
    if (team.level === "Training") {
      trainingTeamComponents.push(
        <SingleTeamComponent key={team.id} team={team} />
      )
    } else if (team.level === "Project") {
      projectTeamComponents.push(
        <SingleTeamComponent key={team.id} team={team} />
      )
    }
  }

  // Provide a date to label this group if there teams for this semester, based on the information of the
  // first team in this semester
  let dateStr: string = ""
  if (teamIds.length > 0) {
    dateStr = DisplayUtility.getSemesterString(Data.Groups[teamIds[0]])
  }
  return (
    <div id="allteams">
      <div className="semester--title">{dateStr}</div>
      <div id="trainingteams" className="board-team--title anchor">
        Training Teams
      </div>
      <div className="teams">{trainingTeamComponents}</div>

      <div id="projectteams" className="board-team--title">
        Project Teams
      </div>
      <div className="teams">{projectTeamComponents}</div>
    </div>
  )
}
