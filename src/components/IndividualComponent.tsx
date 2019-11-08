import * as lodash from "lodash";
import * as React from "react";
import * as Data from "src/data/data";
import { Person } from "src/data/types"
import { PersonPositionComponent } from './PersonPositionComponent'
import { PersonPosition } from "src/data/types";

export class IndividualComponent extends React.Component<any> {
  // Finds all person ids that match name given
  public findIDs(personName: string) {
    var posIDs = []
    var people = Data.People
    for (var pID in people) {
      let currPerson: Person = people[pID];
      if (currPerson.name.toLowerCase().includes(personName.toLowerCase())) {
        alert('found ' + currPerson.name);
        posIDs.push(currPerson.positionIds);
      }
    }
    return posIDs;
  }
  public render() {
    // Stores url parameters in params
    const params = new URLSearchParams(this.props.location.search);
    var name = params.get('name');
    let personPositionComponents: any = [];
    if (name != undefined) {
      let posIDs = this.findIDs(name);
      posIDs.forEach(ids => {
        // Most recent position that the person holds is represented by the last id
        let recentPosition = Data.PersonPositions[ids[ids.length - 1]];
        personPositionComponents.push(
          <PersonPositionComponent
            key={recentPosition.id}
            personPosition={recentPosition}
          />
        );
      })
    }
    return (
      <div>
        <h1>Results for {name}</h1>
        {personPositionComponents}
      </div>
    );
  }
}
