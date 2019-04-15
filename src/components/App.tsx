import * as React from "react";
import { GroupsComponent } from "src/components/GroupsComponent";
import * as AFX from "src/data/data";
import { Semester } from "src/data/types";
import { TeamsComponent } from "src/TeamsComponent";
import "./App.css";
import SideBar from "./sidebar";
import { render } from "react-dom";

export interface App {
  semKey: string;
}

export class App extends React.Component<
  {},
  { semKey: string; count: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      semKey: "rec5XKEgTIG4JPqKB",
      count: 0,
    };
  }

  showSettings(event: React.MouseEvent) {
    event.preventDefault();
  }

  public myCallback = (groupID: string) => {
    this.setState({
      semKey: groupID,
      count: this.state.count + 1,
    });
  };

  public render() {
    let groups: any = [];
    // Go through all semesters (in chronological order) and display respective board members and teams
    // for (let semKey in AFX.Semesters) {
    let currSem: Semester = AFX.Semesters[this.state.semKey];
    let currBoardKey: any = currSem.boardGroupId; // todo: yucky array and any
    if (currBoardKey) {
      groups.push(<GroupsComponent group={AFX.Groups[currBoardKey[0]]} />);
    }
    if (currSem.teamGroupIds) {
      groups.push(<TeamsComponent teamIds={currSem.teamGroupIds} />);
      // TODO: TeamsComponent, renaming things, string[] mess
    }
    // }
    return (
      <div>
        {/* <p>{this.state.count}</p> */}
        <SideBar onClick={this.myCallback} />
        {groups}
      </div>
    );
  }
}
