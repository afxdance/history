import * as lodash from "lodash";
import * as React from "react";
import * as AFX from "src/data/data";
import { Group, Person, PersonPosition, Semester } from "src/data/types";

interface HoverWrapperComponentProp {
  pp: PersonPosition;
}

interface HoverWrapperComponentState {
  newAdjustedLeft: number | undefined;
}

// prop = personposition
export class HoverWrapperComponent extends React.Component<
  HoverWrapperComponentProp,
  HoverWrapperComponentState
  > {
  public state = {
    newAdjustedLeft: undefined,
  };

  public readjust = () => {
    // Executes function (displays info box) after 1s
    let elem = this.refs.HoverRef as Element;
    if (!elem) {
      return;
    }

    /* Commented this section out since we wanted center alignment.
       This section was made when items that were left aligned went
       off screen. It readjusted items to basically them right aligned.
       However, with our center alignment(left: -50%) it doesn't really
       work so we took it out.*/
    this.setState(
      {
        newAdjustedLeft: undefined,
      },
      () => {
        let position = elem.getBoundingClientRect();
        if (position.right - 4 > window.innerWidth) {
          this.setState({
            newAdjustedLeft:
              window.innerWidth -
              position.right -
              (position.right - position.left) / 2,
          });
        }
        console.log(position.right);
        console.log(window.innerWidth);
        console.log((position.right - position.left) / 2);
      }
    );
  };

  public render() {
    // Takes in person position component
    // <div hover over thing>
    // dipslay person position
    // </dvi>
    // let personPosition: AFX.PersonPosition = this.props.personPosition;
    // let personComp = (
    //   <PersonComponent person={AFX.People[personPosition.person[0]]} />
    // );

    const ret = [];
    // let id = "recZFzCcA5n9Tuyij";
    // let stooph = AFX.PersonPositions[id];
    const pp: PersonPosition = this.props.pp;
    // if (this.props.pp == null) {
    //   console.log("NEED NULL CHECK");
    // }
    const personID = pp.personIds[0];

    const person: Person = AFX.People[personID];

    let personPositions: PersonPosition[];
    personPositions = person.positionIds.map(id => AFX.PersonPositions[id]);
    personPositions = lodash.sortBy(
      personPositions,
      personPosition => personPosition.sortKey
    );
    personPositions.reverse();

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

    return (
      <span className="HoverWrapper" onMouseEnter={this.readjust}>
        <span className="HoverWrapper-inline">{this.props.children}</span>
        <span
          className="HoverWrapper-content"
          ref="HoverRef"
          /* Removed since code creating this style aspect is commented out */
          style={{ left: this.state.newAdjustedLeft }}
        >
          <h3>{person.name}</h3>
          {ret}
        </span>
      </span>
    );
  }
}
