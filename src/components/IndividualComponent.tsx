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
        posIDs.push(currPerson.positionIds);
      }
    }
    return posIDs;
  }
  public render() {
    // Stores url parameters (?name=" ") in params
    var name = this.props.name;
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
    if (personPositionComponents.length == 0) {
      name = name + " Not Found.";
    }
    return (
      <div className="search-results">
        <p className="semester--title">{name}</p>
        {personPositionComponents}
      </div>
    );
  }
}
