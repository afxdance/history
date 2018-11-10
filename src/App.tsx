import * as React from "react";
import "./App.css";
import AFX from "./data";
import logo from "./logo.svg";
import { GroupsComponent } from "./GroupsComponent";
import { TeamsComponent } from "./TeamsComponent";

class App extends React.Component {
  public render() {
    let groups: any = [];
    for (let semKey in AFX.Semesters) {
      let currSem: AFX.Semester = AFX.Semesters[semKey];
      let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
      if (currBoardKey) {
        groups.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
      }
      if (currSem.teamGroupIds) {
        groups.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
        // for (let teamKey in currSem.teamGroupIds) {
        //   // go through all teams and add them to the groups list
        //   // push TeamsComponent instead of GroupsComponenet for team

        //   // want to work on: TeamsComponent, renaming things, string[] mess
        //   // let currTeamKey: any = AFX.Groups[]
        //   groups.push(<TeamsComponent team={AFX.Groups[teamKey]} />);
        // }
      }

      // let currGroup: AFX.Group = AFX.Groups[key];
      // if (currGroup.type == "board") {
      //   groups.push(<GroupsComponent group={currGroup} />);
      // }
    }
    // let teams: any = [];
    // for (let key in AFX.Groups) {
    //   let currGroup: AFX.Group = AFX.Groups[key];
    //   if (currGroup.type == "board") {
    //     groups.push(<GroupsComponent group={currGroup} />);
    //   } else {
    //     // team
    //     teams.push(<TeamsComponent group={currGroup} />);
    //   }
    // }

    console.log("IMPACTS");

    return <div className="App">{groups}</div>;
  }
}

export default App;
