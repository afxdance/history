import * as React from "react";
import { Person } from "src/data/types";

// For display underneath people's images
export class PersonComponent extends React.Component<any> {
  public render() {
    const person: Person = this.props.person;
    return <div className="name">{person.name}</div>;
  }
}
