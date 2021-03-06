/**
 * Note: Declare types in this file. It should reflect the column configuration on Airtable.
 */

// This is the type for "attachment" columns on Airtable.
export interface Attachment {
  url: string
  [x: string]: any
}

export interface Person {
  // Airtable fields
  id: string
  createdTime: string

  // Custom columns
  name: string
  positionIds: string[]
}
// export let People: { [x: string]: Person };

export interface Group {
  // Airtable fields
  id: string
  createdTime: string

  // Custom columns
  type: string
  name: string
  positionIds?: string[] // only for board
  teamPicture?: Attachment[] // only for teams
  videoUrl?: string // only for teams
  boardSemesterId?: string[] // todo: should not be array?
  teamSemesterId?: string[] // todo: should not be array?
  level?: string
}
// export let Groups: { [x: string]: Group };

export interface PersonPosition {
  // Airtable fields
  id: string
  createdTime: string

  // Custom columns
  picture?: Attachment[]
  personIds: string[]
  groupIds: string[]
  positionTitle: string
  sortKey: string
  [x: string]: any
}
// export let PersonPositions: { [x: string]: PersonPosition };

export interface Semester {
  id: string
  createdTime: string
  codename: string
  boardGroupId?: string[] // todo: should not be array?
  teamGroupIds?: string[]
}

export interface App {
  semKey: string
}

export interface Year {
  id: string
  createdTime: string
  semCodename: string[]
  Name: string
}

export interface TechProject {
  name: string
  description: string
  techPeople: string[]
}

export interface TechPerson {
  name: string
  project: string
  position: string
  picture: Attachment[]
}
