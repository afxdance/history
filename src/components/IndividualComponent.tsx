import * as lodash from "lodash";
import * as React from "react";
import * as AFX from "src/data/data";
import { Person } from "src/data/types"
import { PersonPositionComponent } from './PersonPositionComponent'
import { PersonPosition } from "src/data/types";

export class IndividualComponent extends React.Component<any> {
  // Finds all person ids that match name given
  public findIDs(personName: string) {
    var posIDs = []
    var people = AFX.People
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
      // Mimicking hoverwrappercomponent, but in a static context for popups
      posIDs.forEach(ids => {
        // Most recent position that the person holds is represented by the last id
        let recentPosition = AFX.PersonPositions[ids[ids.length - 1]];
        const ret = [];
        ret.push(<h3>{name}</h3>);
        ids.forEach(function (id: any) {
          let personPos: PersonPosition = AFX.PersonPositions[id];
          // picture
          let picUrl = "afx2.png";
          if (personPos.picture) {
            picUrl = personPos.picture[0].url;
          }
          // group name
          const groupID = personPos.groupIds[0];
          const groupName = AFX.Groups[groupID].name;
          // position titles
          const posTitle = personPos.positionTitle;
          ret.push(
            <div key={personPos.id} className="rowOfHover">
              <div className="pictureHover">
                <img className="infoPicHover" src={picUrl} />
              </div>
              <div className="infoHover">{groupName}</div>
              <div className="infoHover">{posTitle}</div>
            </div>
          );
        });
        personPositionComponents.push(
          <div className="row">
            <div className="col-sm">
              <PersonPositionComponent
                key={recentPosition.id}
                personPosition={recentPosition}
                hoverDisplay={false}
              />
            </div>
            <div className="col-sm">
              {ret}
            </div>
          </div>
        );
      });
    }
    if (personPositionComponents.length == 0) {
      name = name + " Not Found.";
    }
    return (
      <div className="search-results">
        <p className="semester--title container">{name}</p>
        {personPositionComponents}
      </div>
    );
  }
}
