import * as React from "react";
import * as AFX from "src/data/data";
import { PersonPosition } from "src/data/types";

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
  state = {
    newAdjustedLeft: undefined,
  };

  public readjust = () => {
    console.log("readjust");

    var elem = this.refs.HoverRef as Element;
    if (!elem) return;

    this.setState(
      {
        newAdjustedLeft: undefined,
      },
      () => {
        var position = elem.getBoundingClientRect();
        if (position.right > window.innerWidth) {
          this.setState({
            newAdjustedLeft: window.innerWidth - position.right,
          });
        }
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
    const personID = pp.person[0];

    const person = AFX.People[personID];

    const len = person.positionIds.length;

    for (let i = len - 1; i >= 0; i--) {
      // Get each personPosition from the person's position IDs
      const posID = person.positionIds[i];
      const personPos = AFX.PersonPositions[posID];

      // picture
      let picUrl = "afx2.png";
      if (personPos.picture) {
        picUrl = personPos.picture[0].url;
      }

      // group name
      const groupID = personPos.group[0];
      const groupName = AFX.Groups[groupID].name;

      let semester = "TEMP";

      // string slicing
      semester = groupName.replace("AFX Board ", "").replace("AFX Tech ", "");

      // position titles
      const posTitle = personPos.positionTitle;

      ret.push(
        <div className="rowOfHover">
          <div className="pictureHover">
            <img className="infoPicHover" src={picUrl} />
          </div>
          <div className="infoHover">{semester}</div>
          <div className="infoHover">{posTitle}</div>
        </div>
      );
    }

    return (
      <span className="HoverWrapper" onMouseEnter={this.readjust}>
        <span className="HoverWrapper-inline">{this.props.children}</span>
        <span
          className="HoverWrapper-content"
          ref="HoverRef"
          style={{ left: this.state.newAdjustedLeft }}
        >
          <h3>{person.name}</h3>
          {ret}
        </span>
      </span>
    );
  }
}
