import { ProjectAFXTechComponent } from "./ProjectAFXTechComponent"
import { CSSProperties } from "react"
import * as React from "react"
import { TechProjects } from "src/data/data"

export const AFXTechComponent: React.FC<{}> = () => {

  let techSections: any[] = []

  for (const project of Object.keys(TechProjects)) {
    techSections.push(<ProjectAFXTechComponent techProject={TechProjects[project]} />)
  }

  // this is just code from landingpagecomponent so it's easier to edit
  return (
    <div>
      <h1 style={{ margin: "25px", textAlign: 'center' }}>AFX TECH :)</h1>
      {/* This is about AFX Tech and the Team Leads */}
      <div>{techSections[0]}</div>
      <h2 className="afxtech-header">AFX Tech Projects</h2>
      <div>{techSections.slice(1)}</div>
    </div >
  )
}
