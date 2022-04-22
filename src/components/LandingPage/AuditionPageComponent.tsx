import * as React from "react"
import Popup from "reactjs-popup"
import { TechProjects } from "src/data/data"
import { ProjectComponent } from "./ProjectComponent"

export const AuditionPageComponent: React.FC<{}> = ({ }) => {
  return (
    <Popup
      defaultOpen={false}
      trigger={<button className="join-button">Audition!</button>}
      modal={true}
      closeOnDocumentClick={true}
      className="landingPage"
    >
      <div
        style={{
          fontSize: "medium",
          display: "flex",
          justifyContent: "center",
          margin: "30px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "25px", fontWeight: "bold" }}>
          Audition for AFX!
        </h1>
        <img src="sp22Auditions.jpg" className="tech-committee-img" />
        <h1 className="text-center">Interested?</h1>
        <div>
          <a
            href="https://tinyurl.com/afxsp22rsvp"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="apply-button">Sign Up For Auditions!</button>
          </a>
        </div>
        <a
          href="https://tinyurl.com/whoisafx"
          style={{
            fontSize: "xx-large",
            textAlign: "center",
            marginTop: "15px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Who is AFX?
        </a>
      </div>
    </Popup>
  )
}
