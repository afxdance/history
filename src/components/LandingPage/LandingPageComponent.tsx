import * as React from "react"
import Popup from "reactjs-popup"
import { TechProjects } from "src/data/data"
import { ProjectComponent } from "./ProjectComponent"

export const LandingComponent: React.FC<{}> = ({}) => {
  let techSections: any[] = []

  for (const project in TechProjects) {
    techSections.push(<ProjectComponent techProject={TechProjects[project]} />)
  }

  return (
    <Popup
      defaultOpen={true}
      trigger={<button className="join-button">Join AFX Tech!</button>}
      modal
      closeOnDocumentClick
      className="landingPage"
    >
      <div>
        <h1 style={{ margin: "25px" }}>Apply to AFX Tech!</h1>
        <div>{techSections[0]}</div>
        <h1 style={{ margin: "25px" }}>Projects</h1>
        <div>{techSections.slice(1)}</div>
        <h1 style={{ margin: "25px" }}>Interested?</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            formAction="https://forms.gle/L2SzZcsQKZv3JFpC8"
            className="apply-button"
          >
            Apply Now!
          </button>
          Due: 9/12 at 11:59 PM
        </div>
      </div>
    </Popup>
  )
}
