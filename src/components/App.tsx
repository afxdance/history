import * as React from "react";
import * as AFX from "src/data/data";
import "./App.css";
import { AboutComponent } from "./AboutComponent";
import { EventsComponent } from 'src/components/EventsComponent';
import { GroupsComponent } from "src/components/GroupsComponent";
import { Navigation } from "./NavBarComponent";
import { SemProvider, useSem } from 'src/hooks/use-sem';
import { Semester } from "src/data/types";
import { TeamsComponent } from "./TeamsComponent";

export const App: React.FC<{}> = () => {
  const {currentSemKey} = useSem()
  const [ display, toggleDisplayVisible ] = React.useState(false)

  const checkHistory = React.useCallback(() => {
    const history = document.getElementById("bottom")?.getBoundingClientRect();
    const historyTop = history? history.top : 0

    if (historyTop <= 0 && display == false) {
      toggleDisplayVisible(true)
    }
  }, [window])

  let board: any = [];
  let teams: any = [];
  // Go through all semesters (in chronological order) and display respective board members and teams
  // for (let semKey in AFX.Semesters) {
  const currSem: Semester = AFX.Semesters[currentSemKey || "rec4GaaU2uP8FRfw3"];
  const currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
  if (currBoardKey) {
    board.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
  }
  if (currSem.teamGroupIds) {
    teams.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
    // TODO: TeamsComponent, renaming things, string[] mess
  }

  React.useEffect(() => {
    window.addEventListener("scroll", checkHistory);
  }, [])

  return (
    <SemProvider>
      <div className={display ? "show-Search" : "no-Search"}>
        <Navigation/>
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
    </SemProvider>
  );
}
