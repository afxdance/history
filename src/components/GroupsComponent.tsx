import * as lodash from "lodash";
import * as React from "react";
import { PersonPositionComponent } from "src/components/PersonPositionComponent";
import * as Data from "src/data/data";
import { Group, PersonPosition } from "src/data/types";
import { DisplayUtility } from "src/DisplayUtility";

const POSITION_TITLE_ORDER = [
  "Executive Director",
  "Vice Executive",
  "Internal Relations",
  "Events Chair",
  "External Events",
  "Internal Events",
  "Finance Chair",
  "Historian",
  "Public Relations",
  "Communications",
  "PR Marketing",
  "PR Design",
  "Outreach Chair",
  "Reach Chair",
  "Founder",
  "Director",
  "Tech Committee Lead",
  "Comp Artistics",
  "Comp Artistics ",
  "Comp Artistic Advisor",
  "Comp Artistic Assistants",
  "Comp Captain",
  "Comp Communications",
  "Comp Finance",
];

/**
 * Returns a value of the form
 *   [(index of position title in the array above), (person name)]
 *
 * Used to sort personPositions by title then by person's name.
 */
function personPositionSortKey(personPosition: PersonPosition) {
  let titleKey: string | number;
  titleKey = POSITION_TITLE_ORDER.indexOf(personPosition.positionTitle);

  // If the position isn't found in the array above, just use the position title.
  // These positions will appear after all of the ones that are found above.
  if (titleKey === -1) {
    titleKey = personPosition.positionTitle;
  }

  let person = Data.People[personPosition.person[0]];

  return [titleKey, person.name];
}

// Used for displaying a single set of board members for a semester
export class GroupsComponent extends React.Component<any> {
  public render() {
    let group: Group = this.props.group;
    let personPositionIds = group.positionIds || [];
    let personPositions: PersonPosition[];
    personPositions = personPositionIds.map(id => Data.PersonPositions[id]);
    personPositions = lodash.sortBy(personPositions, personPositionSortKey);
    let personPositionComponents = personPositions.map(personPosition => (
      <PersonPositionComponent
        key={personPosition.id}
        personPosition={personPosition}
      />
    ));

    // No longer displays group.name -- instead we display the semesters, and then the board and team labels
    return (
      <div className="board">
        <div className="semester--title">
          {DisplayUtility.getSemesterString(group)}
        </div>
        {/* <h2 className="board--title">{group.name}</h2> */}
        <div className="board-team--title">Board Members</div>
        <div className="board--row">{personPositionComponents}</div>
      </div>
    );
    // }
  }
}
