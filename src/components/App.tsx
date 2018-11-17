import * as React from "react";
import { GroupsComponent } from "src/components/GroupsComponent";
import * as AFX from "src/data/data";
import "./App.css";

export class App extends React.Component {
  public render() {
    const groups: any = [];
    for (const key in AFX.Groups) {
      groups.push(<GroupsComponent group={AFX.Groups[key]} />);
    }

    return <div className="App">{groups}</div>;
  }
}
