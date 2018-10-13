import * as React from "react";
import "./App.css";
import AFX from "./data";
import logo from "./logo.svg";
import { GroupsComponent } from "./GroupsComponent";

class App extends React.Component {
  public render() {
    let groups: any = [];
    for (let key in AFX.Groups) {
      groups.push(<GroupsComponent group={AFX.Groups[key]} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        {groups}
      </div>
    );
  }
}

export default App;
