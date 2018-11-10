import * as React from "react";

import AFX from "./data";

export class SingleTeamComponent extends React.Component<any> {
  public render() {
    let team: AFX.Group = this.props.team;
    // return <div className="name">TEAM</div>;
    return <div>{team.name}</div>;
  }
}
