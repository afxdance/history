import * as lodash from "lodash";
import * as React from "react";
import * as AFX from "src/data/data";
import { Person } from "src/data/types"
import { PersonPositionComponent } from './PersonPositionComponent'
import { PersonPosition } from "src/data/types";


export const IndividualComponent: React.FC<{ name: string }> = ({ name }) => {
<<<<<<< HEAD
  function findIDs(personName: string) {
    let posIDs: string[][] = []
    let people = AFX.People
    for (let pID of Object.keys(people)) {
=======
  const findIDs = (personName: string) => {
    let posIDs: string[][] = []
    let people = AFX.People
    for (let pID in people) {
>>>>>>> 3f201c03ec33c691b5611ce38e62b3ab62c2cdac
      let currPerson: Person = people[pID];
      if (currPerson.name.toLowerCase().includes(personName.toLowerCase())) {
        posIDs.push(currPerson.positionIds);
      }
    }
    return posIDs;
  }
  // Stores url parameters (?name=" ") in params
  let personPositionComponents: any = [];

  if (name !== undefined) {
    let posIDs = findIDs(name);
    // Mimicking hoverwrappercomponent, but in a static context for popups
    posIDs.forEach((ids: any) => {
      // Most recent position that the person holds is represented by the last id
      let recentPosition = AFX.PersonPositions[ids[ids.length - 1]];
      const ret: any[] = [];
      ret.push(<h3>{name}</h3>);
      ids.forEach((id: any) => {
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
  if (personPositionComponents.length === 0) {
    name = name + " Not Found.";
  }
  return (
    <div className="search-results">
      <p className="semester--title container">{name}</p>
      {personPositionComponents}
    </div>
  );
}
