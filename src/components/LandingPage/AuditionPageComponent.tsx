import * as React from "react"
import Popup from "reactjs-popup"
import { TechProjects } from "src/data/data"
import { ProjectComponent } from "./ProjectComponent"

export const AuditionPageComponent: React.FC<{}> = ({ }) => {
  return (
    <Popup
      defaultOpen={true}
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
        <img src="fa22Auditions.png" className="tech-committee-img" />
        <h5 className="text-center"><strong>Committees Teach Night:</strong> Friday, September 2, 7-10 PM @ Eshleman Hall 240</h5>
        <h5 className="text-center"><strong>Audition Day 1:</strong> Sunday, September 4, 7-10 PM @ Haas Pavilion</h5>
        <h5 className="text-center"><strong>Audition Day 2:</strong> Thursday, September 8, 7-10 PM @ Haas Pavilion</h5>
        <br />
        {/* <h1 className="text-center">Interested?</h1> */}
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
