import * as React from "react"
import * as AFX from "src/data/data"
import "./App.css"
import { Component } from "react"
import { HashRouter, Link, Redirect, Route } from "react-router-dom"
import { EventsComponent } from "src/components/EventsComponent"
import { GroupsComponent } from "src/components/GroupsComponent"
import { Semester } from "src/data/types"
import { useSem } from "src/hooks/use-sem"
import { AboutComponent } from "./AboutComponent"
import { AFXTechComponent } from "./AFXTechComponent"
import { LandingComponent2 } from "./LandingPage/LandingPageComponent"
import { AuditionPageComponent } from "./LandingPage/AuditionPageComponent"
import { Navigation } from "./NavBarComponent";
import { TeamsComponent } from "./TeamsComponent";
import { FAQPageComponent } from "src/components/FAQPageComponent";


const Home = () => <div><h1>Home</h1></div>
const About = () => <div><h1>Joe mama</h1></div>
const FAQ = () => <div><h1>FAQ</h1></div>
const Events = () => <div><h1>Events</h1></div>


export const App: React.FC<{}> = () => {
  const currentSemKey = useSem().currentSemKey
  // console.log(currentSemKey) // TODO: semkey is undefined at this point
  const [display, toggleDisplayVisible] = React.useState(false)
  const [landingPageDisplay, toggleLandingPageDisplay] = React.useState(true)

  const checkHistory = React.useCallback(() => {
    const history = document.getElementById("bottom")?.getBoundingClientRect()
    const historyTop = history ? history.top : 0

    if (historyTop <= 0 && display == false) {
      toggleDisplayVisible(true)
    }
  }, [window])

  let board: any = []
  let teams: any = []

  const currSem: Semester = AFX.Semesters[currentSemKey || "recazNIM3EYCM5nnL"] // TODO: currentSemKey doesn't work 

  const currBoardKey: any = currSem.boardGroupId

  if (currBoardKey) {
    board.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />)
  }
  if (currSem.teamGroupIds) {
    teams.push(<TeamsComponent teamIds={currSem.teamGroupIds} />)
  }

  const boardRenderTarget = document.getElementById("board")
  const teamRenderTarget = document.getElementById("team")

  React.useEffect(() => {
    window.addEventListener("scroll", checkHistory)

    return () => {
      window.removeEventListener("scroll", checkHistory)
    }
  }, [])

  return (
    <HashRouter basename="/">
      {/* <div className={display ? "show-Search" : "no-Search"}>
        <Navigation searchable={false} />
      </div> */}

      {/* <div id="top" className="anchor">
        <Link to="/about">About</Link>
      </div>
      <div id="middle" className="anchor">
        <div id="events">
          <Link to="/events">Events</Link>
          <br />
        </div>
      </div>
      <div id="bottom" className="anchor">
        <div id="history">
          <h1>HISTORY</h1>
          <br />
          <div id="board"><Link to="/board">Board</Link></div>
          <div id="teams"><Link to="/teams">Teams</Link></div>
          <div id="afxtech"><Link to="/afxtech">AFX Tech</Link></div>
        </div>
      </div> */}

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route path="/home" render={() => <div>
        <Navigation searchable={false} fixed='top' />
        <LandingComponent2 />
      </div>} />

      <Route path="/faq" render={() => <div>
        <Navigation searchable={false} fixed='false' />
        <FAQPageComponent />
      </div>} />

      <Route path="/about" render={() => <div>
        <Navigation searchable={false} fixed='false' />
        {/* <AuditionPageComponent /> */}
        <AboutComponent />
      </div>} />

      <Route path="/events" render={() => <div>
        <Navigation searchable={false} fixed='false' />
        <EventsComponent />
      </div>} />

      <Route path="/board" render={() => <div>
        {/* <div className={ display ? "show-search" : "no-search" }> */}
        <Navigation searchable={true} fixed='false' />
        {/* </div> */}
        <div id="board">{board}</div>
      </div>} />

      <Route path="/teams" render={() =>
        <div>
          <Navigation searchable={true} fixed='false' />
          <div id="teams">{teams}</div>
        </div>} />

      <Route path="/afxtech" render={() =>
        <div>
          <Navigation searchable={false} fixed='false' />
          <AFXTechComponent />
        </div>} />

    </HashRouter >
  );

}
