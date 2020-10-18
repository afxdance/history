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

export const App: React.FC<{}> = () => {
  const { currentSemKey } = useSem()
  const [ display, toggleDisplayVisible ] = React.useState(false)
  const [ landingPageDisplay, toggleLandingPageDisplay ] = React.useState(true)

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
    <React.Fragment>
      <LandingComponent/>
      <div className={display ? "show-Search" : "no-Search"}>
        <Navigation />
      </div>
      <div id="top" className="anchor">
        <AboutComponent />
      </div>
      <div id="middle" className="anchor">
        <div id="events">
          <h1>EVENTS</h1>
          <EventsComponent />
          <br />
        </div>
      </div>
      <div id="bottom" className="anchor">
        <div id="history">
          <h1>HISTORY</h1>
          <br />
          <div id="board">{board}</div>
          <div id="teams">{teams}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
