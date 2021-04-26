import * as React from "react"
import { CSSProperties } from "react"
import { ProjectAFXTechComponent } from "./ProjectAFXTechComponent"
import { TechProjects } from "src/data/data"

export const AFXTechComponent: React.FC<{}> = () => {

  let techSections: any[] = []

  for (const project of Object.keys(TechProjects)) {
    techSections.push(<ProjectAFXTechComponent techProject={TechProjects[project]} />)
  }

  //this is just code from landingpagecomponent so it's easier to edit
  return (
    <div>
      <h1 style={{ margin: "25px" }}>AFX TECH</h1>
      {/* This is about AFX Tech and the Team Leads */}
      <div>{techSections[0]}</div>
      <h1>AFX Tech Projects</h1>
      <div>{techSections.slice(1)}</div>
    </div>
  )
}
