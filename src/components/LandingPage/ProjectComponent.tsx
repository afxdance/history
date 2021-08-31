import * as React from "react"
import { TechPeople } from "src/data/data"
import { TechProject } from "src/data/types"

interface ProjectProps {
  techProject: TechProject
}

export const ProjectComponent: React.FC<ProjectProps> = props => {
  const { name, description, techPeople } = props.techProject
  const isCommittee = name === "Committee"

  const header = isCommittee ? "Who We Are" : name + " Project"

  const picRow = techPeople.map((key: string) => {
    const { name, position, picture } = TechPeople[key]

    return picture ? (
      <div className="tech-person">
        <img
          className="tech-person-img"
          src={picture[0].thumbnails.large.url}
          width="200px"
          height="200px"
        />
        <div className="tech-person-info">
          <div className="name">{name}</div>
          <div className="title">{position}</div>
        </div>
      </div>
    ) : (
      <div className="tech-person">
        <img
          className="tech-person-img"
          src={"https://i.imgur.com/4qcFzdm.png"}
          width="200px"
          height="200px"
        />
        <div className="tech-person-info">
          <div className="name">{name}</div>
          <div className="title">{position}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="project">
      <div style={{ margin: "30px" }}>
        <h2 className="project-h1">{header}</h2>
        <div className="project-description">
          {description}
          {isCommittee ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "15px 0px",
              }}
            >
              We are recruiting this semester for the projects listed below. The
              applications are due 1/31 at 11:59 PM. If you are interested,
              apply here:
              <a
                href="http://tinyurl.com/techfa21"
                style={{ textAlign: "center", marginTop: "15px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply!
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ margin: "30px" }}>
        <h3 className="project-h3">Led By</h3>
        <div className="project-pictures">{picRow}</div>
      </div>
    </div>
  )
}
