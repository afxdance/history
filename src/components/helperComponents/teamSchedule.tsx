import * as React from "react" // https://stackoverflow.com/a/56833596/13745526, cannot use import React from 'react' because of type issues

export const TeamSchedule: React.FC<teamScheduleType> = ({ day, teams }) => {

  const teamsComponent = teams.map(function (singleTeam) {

    return (<div className="name-time-loc-container">
      <div className="time-name" style={{backgroundColor: singleTeam.color}}>{singleTeam.name}</div>
      <div className="time-loc-container">
        <div>
          {singleTeam.start} - {singleTeam.end}
        </div>
        <div className="loc-font">{singleTeam.loc}</div>
      </div>
    </div>
    )});

  return (
    <div className="team-schedule-gray-box">
      <div>
        <b className="day-font">{day}</b>
        {teamsComponent}
      </div>
    </div>
  )
}

export const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"] as const
export type dayType = typeof days[number]

export interface teamScheduleType {
  day: dayType
  teams: singleTeam[]
}

export interface singleTeam {
  name: string
  start: string
  end: string
  loc: string
  color: string
}
