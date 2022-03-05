import * as lodash from "lodash"
import * as React from "react"
import * as Data from "src/data/data"
import { CompComponent } from "./CompComponent"
import { DisplayUtility } from "src/DisplayUtility"
import { Group } from "src/data/types"

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
  let unleveledTeamComponents: any = []
  let compComponent: any = null
  for (const team of teams) {
    if (team.level === "Training") {
      trainingTeamComponents.push(
        <SingleTeamComponent key={team.id} team={team} />
      )
    } else if (team.level === "Project") {
      projectTeamComponents.push(
        <SingleTeamComponent key={team.id} team={team} />
      )
    } else if (team.level === "Competition") {
      const compId: string = team.id
      if (compId) {
        compComponent = (
          <React.Fragment>
            <div id="compteam" className="board-team--title anchor">
              {team.name}
            </div>
            <div className="teams">
              <CompComponent key={compId} team={team} />
            </div>
          </React.Fragment>
        )
      }
    } else {
      unleveledTeamComponents.push(
        <SingleTeamComponent key={team.id} team={team} />
      )
    }
  }
  // avoid hardcoding headers; summer teams dont have "training" or "project" teams
  let trainingComponent: any = null
  let projectComponent: any = null
  let unleveledComponent: any = null

  if (trainingTeamComponents.length > 0) {
    trainingComponent = (
      <React.Fragment>
        <div id="projectteams" className="board-team--title">
          Training Teams
        </div>
        <div className="teams">{trainingTeamComponents}</div>
      </React.Fragment>
    )
  }
  if (projectTeamComponents.length > 0) {
    projectComponent = (
      <React.Fragment>
        <div id="projectteams" className="board-team--title">
          Project Teams
        </div>
        <div className="teams">{projectTeamComponents}</div>
      </React.Fragment>
    )
  }
  if (unleveledTeamComponents) {
    unleveledComponent = (
      <div className="teams">{unleveledTeamComponents}</div>
    )
  }

  // Provide a date to label this group if there teams for this semester, based on the information of the
  // first team in this semester
  let dateStr: string = ""
  if (teamIds.length > 0) {
    dateStr = DisplayUtility.getSemesterString(Data.Groups[teamIds[0]])
  }
  return (
    <div id="allteams">
      <div className="board-team--title anchor">
        Teams
      </div>
      {unleveledComponent}
      {trainingComponent}
      {projectComponent}
      {compComponent}
    </div>
  )
}
