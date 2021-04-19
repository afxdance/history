import * as React from "react";
import * as AFX from "src/data/data";
import "./App.css";
import { AboutComponent } from "./AboutComponent";
import { EventsComponent } from 'src/components/EventsComponent';
import { GroupsComponent } from "src/components/GroupsComponent";
import { Navigation } from "./NavBarComponent";
import { useSem } from 'src/hooks/use-sem';
import { Semester } from "src/data/types";
import { TeamsComponent } from "./TeamsComponent";
import { LandingComponent } from "./LandingPage/LandingPageComponent"

import { AFXTechComponent } from "./AFXTechComponent";

import { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

const Home = () => <div><h1>Home</h1></div>
const About = () => <div><h1>About</h1></div>
const Events = () => <div><h1>Events</h1></div>

export const App: React.FC<{}> = () => {
  const currentSemKey = useSem().currentSemKey;
  const [display, toggleDisplayVisible] = React.useState(false)
  const [landingPageDisplay, toggleLandingPageDisplay] = React.useState(true)

  const checkHistory = React.useCallback(() => {
    const history = document.getElementById("bottom")?.getBoundingClientRect();
    const historyTop = history ? history.top : 0

    if (historyTop <= 0 && display == false) {
      toggleDisplayVisible(true)
    }
  }, [window])

  let board: any = [];
  let teams: any = [];

  const currSem: Semester = AFX.Semesters[currentSemKey || "rec4GaaU2uP8FRfw3"];

  const currBoardKey: any = currSem.boardGroupId;
  // todo: yucky array and any

  if (currBoardKey) {
    board.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
  }
  if (currSem.teamGroupIds) {
    teams.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
    // TODO: TeamsComponent, renaming things, string[] mess
  }

  React.useEffect(() => {
    window.addEventListener("scroll", checkHistory);

    return (() => {
      window.removeEventListener("scroll", checkHistory)
    })
  }, [])

  return (
    <HashRouter basename='/'>
      {/* <LandingComponent/> { /*  Comment out landing component off-recruiting season! */}
      <div className={display ? "show-Search" : "no-Search"}>
        <Navigation />
      </div>
      {/* <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={AboutComponent} />
        <Route path="/about" component={EventsComponent} />
      </div> */}

      <div id="top" className="anchor">
        <Link to="/about">About</Link>
      </div>
      <div id="middle" className="anchor">
        <div id="events">
          <Link to="/events">Events</Link>
          <br />
        </div>
      </div>
      {/* <div id="bottom" className="anchor">
        <div id="history">
          <h1>HISTORY</h1>
          <br />
          <div id="board"><Link to="/history/board">Board</Link></div>
          <div id="teams"><Link to="/history/teams">Teams</Link></div>
          <div id="afxtech"><Link to="/history/afxtech">AFX Tech</Link></div>
        </div>
      </div> */}
      <Route path="/about" component={AboutComponent} />
      <Route path="/events" component={EventsComponent} />
      <Route path="/history/board" component={board} />
      <Route path="/history/teams" component={teams} />
      <Route path="/history/afxtech" component={AFXTechComponent} />
    </HashRouter >
  );
}
