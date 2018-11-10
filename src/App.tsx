import * as React from "react";
import "./App.css";
import AFX from "./data";
import { GroupsComponent } from "./GroupsComponent";

class App extends React.Component {
  public render() {
    let groups: any = [];

    for (let key in AFX.Groups) {
      groups.push(<GroupsComponent group={AFX.Groups[key]} />);
    }

    return <div className="App">{groups}</div>;
  }
}

export default App;
