import * as React from "react";

import AFX from "./data";
import { SingleTeamComponent } from "./SingleTeamComponent";

//
export class TeamsComponent extends React.Component<any> {
  public render() {
    let teamIds: string[] = this.props.teamIds;
    console.log(teamIds);
    let teamComponents: any = [];
    for (let team in teamIds) {
      let teamKey: string = teamIds[team];
      teamComponents.push(<SingleTeamComponent team={AFX.Groups[teamKey]} />);
    }
    return <div className="teams">{teamComponents}</div>;
  }
}
