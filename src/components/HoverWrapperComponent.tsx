import * as lodash from "lodash";
import * as React from "react";
import * as AFX from "src/data/data";
import { Group, Person, PersonPosition, Semester } from "src/data/types";

interface HoverWrapperComponentProp {
  pp: PersonPosition;
  hoverDisplay: boolean;
}

export const HoverWrapperComponent: React.FC<HoverWrapperComponentProp> = (props) => {
  const [newAdjustedLeft, setAdjustedLeft] = React.useState<string | number>();
  const [newAdjustedRight, setAdjustedRight] = React.useState<string | number>();
  const [newAdjustedTransform, setAdjustedTransform] = React.useState<string>();
  const hoverRef = React.useRef<HTMLDivElement>(null);

  const readjust = () => {
    // Executes function (displays info box) after 1s
    if (hoverRef.current == null) {
      return;
    }

    /* Callback function for leftmost and rightmost infoboxes
       Adjusts transform styling on the left side so that the default translate(-50%) doesn't push it off the page
       */
    let elem: HTMLDivElement = hoverRef.current;
    let position = elem.getBoundingClientRect();

    if (position.right > window.innerWidth) {
      setAdjustedRight(0);
      setAdjustedLeft("auto");
      setAdjustedTransform("translate(0%)");
    }
    if (position.left < 0) {
      setAdjustedLeft(0);
      setAdjustedTransform("translate(0%)");
    }
  };

  const ret: any = [];
  const personPos: PersonPosition = props.pp;
  const personID = props.pp.personIds[0];

  const person: Person = AFX.People[personID];

  let personPositions: PersonPosition[];
  personPositions = person.positionIds.map(id => AFX.PersonPositions[id]);
  personPositions = lodash.sortBy(
    personPositions,
    personPosition => personPosition.sortKey
  );
  personPositions.reverse();
  if (props.hoverDisplay == true) {
    ret.push(<h3>{person.name}</h3>);

    for (let personPos of personPositions) {
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

      if (props.hoverDisplay == true) {
        ret.push(
          <div key={personPos.id} className="rowOfHover">
            <div className="pictureHover">
              <img className="infoPicHover" src={picUrl} />
            </div>
            <div className="infoHover">{groupName}</div>
            <div className="infoHover">{posTitle}</div>
          </div>
        );
      }
    }

    // TODO: please refactor this to use CSS instead of inline styles
    ret.push(
      <div
        key="corrections"
        className="rowOfHover"
        style={{ textAlign: "center", display: "block" }}
      >
        Please let us know if any info is incorrect via&nbsp;
        <a
          href="https://airtable.com/shrES17bKJ3Xl1r0M"
          target="_blank"
          style={{ color: "white", textDecoration: "underline" }}
        >
          this form
        </a>
        .
      </div>
    );
  }
  return (
    <div className="HoverWrapper" onMouseEnter={readjust}>
      <span className="HoverWrapper-inline">{props.children}</span>
      <div
        className="HoverWrapper-content"
        ref={hoverRef}
        style={{
          left: newAdjustedLeft,
          right: newAdjustedRight,
          transform: newAdjustedTransform,
        }}>
        {ret}
      </div>
    </div>
  );
}
