import * as React from "react";

import AFX from "./data";
export class PersonComponent extends React.Component<any> {
  public render() {
    let person: AFX.Person = this.props.person;
    return <div className="name">{person.name}</div>;
  }
}
