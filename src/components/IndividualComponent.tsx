import * as React from "react";
import * as Data from "src/data/data";
import { Person } from "src/data/types"

export class IndividualComponent extends React.Component<any> {
  // Finds all person ids that match name given
  public findIDs(obj: any, name: any) {
    let ids = []
    for (var key in obj) {
      let currPerson: Person = obj[key];
      if (currPerson['name'].includes(name)) {
        ids.push(currPerson['id']);
      }
    }
    return ids;
  }


  public render() {
    // Stores url parameters in params
    const params = this.props.match;
    let ids = this.findIDs(Data.People, params.name);


    // let searchedPerson = Data.People.map(person => person[searchedName]);
    // let personPositionComponents = searchedPerson.map(person)
    return (
      <div>
        <h1>{params.name}</h1>
      </div>
    );
  }
}
