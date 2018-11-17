import * as React from "react";
import "./App.css";
import AFX from "./data";
import logo from "./logo.svg";
import { GroupsComponent } from "./GroupsComponent";
import { TeamsComponent } from "./TeamsComponent";

class App extends React.Component {
  public render() {
    let groups: any = [];
    // Go through all semesters (in chronological order) and display respective board members and teams
    for (let semKey in AFX.Semesters) {
      let currSem: AFX.Semester = AFX.Semesters[semKey];
      let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
      if (currBoardKey) {
        groups.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
      }
      if (currSem.teamGroupIds) {
        groups.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
        // TODO: TeamsComponent, renaming things, string[] mess
      }
    }
    return <div className="App">{groups}</div>;
  }
}

export default App;
