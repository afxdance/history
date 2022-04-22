import * as React from 'react'; // https://stackoverflow.com/a/56833596/13745526, cannot use import React from 'react' because of type issues


export const TeamSchedule: React.FC<teamScheduleType> = ({ day, teams }) => {

  let teamsComponent = teams.map((singleTeam) => (
      <div>
        <div style={nameColorBox}>
          {singleTeam.name}
        </div>
        <div>
          <p>{singleTeam.start} - {singleTeam.end}</p>
          <p>{singleTeam.loc}</p>
        </div>
      </div>));

  return (
    <div className='team-schedule-gray-box'>
      <p>{day}</p>
      {teamsComponent}
    </div>
  )

}

export const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"] as const;
export type dayType = typeof days[number]

export interface teamScheduleType {
  day: dayType,
  teams: singleTeam[]
}

export interface singleTeam {
  name: string,
  start: string,
  end: string,
  loc: string
}

const nameColorBox = {
  'color': "red" // use ReactContext
}
