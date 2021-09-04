import * as React from "react"
import Popup from "reactjs-popup"
import { TechProjects } from "src/data/data"
import { ProjectComponent } from "./ProjectComponent"

export const LandingComponent: React.FC<{}> = ({ }) => {
  let techSections: any[] = []

  for (const project of Object.keys(TechProjects)) {
    techSections.push(<ProjectComponent techProject={TechProjects[project]} />)
  }

  return (
    <Popup
      defaultOpen={true}
      trigger={<button className="join-button">Join AFX Tech!</button>}
      modal={true}
      closeOnDocumentClick={true}
      className="landingPage"
    >
      <div style={{
        fontSize: "medium",
        display: "flex",
        justifyContent: "center",
        margin: "30px",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <img src="sp21tech.png" className="tech-committee-img" />
        <h1 style={{ margin: "25px" }}>Apply to AFX Tech!</h1>
        <div>{techSections[0]}</div>
        <h1 style={{ margin: "25px" }}>Projects</h1>
        <div>{techSections.slice(1)}</div>
        <h1 className="text-center">Interested?</h1>
        <div>
          <a
            href="https://tinyurl.com/techfa21"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="apply-button">Apply Now!</button>
          </a>
        </div>
        <p>Due: 9/12 at 11:59 PM</p>
      </div>
    </Popup>
  )
}
