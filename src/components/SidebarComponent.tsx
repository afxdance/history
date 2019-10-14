import { slide as Menu } from "react-burger-menu";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
import * as React from "react";
import { SemLinkComponent } from "./SemLinkComponent";
import { YearCollapsibleComponent } from "src/components/YearCollapsibleComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Side menu component mainly made by the library react-burger-menu
export interface Sidebar {
  onClick: Function;
  closed: boolean;
}

const divStyle1 = {
  display: "none",
};

const divStyle2 = {};

export class Sidebar extends React.Component<
  { onClick: Function },
  { closed: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      closed: true,
    };
  }

  //Use state in order to have the menu disappear when the close button is pushed
  public close() {
    console.log("closing");
    this.setState({
      closed: true,
    });
  }

  public handleStateChange(state: any) {
    this.setState({ closed: !state.isOpen });
  }

  public render() {
    // We first iterate through all the years and push the components into the list.
    let yearLinks = [];
    for (let year of Object.keys(AFX.Years)) {
      yearLinks.push(
        // We have the onclick function passed through the Sidebar component to be sent to the year component.
        <YearCollapsibleComponent year={year} onClick={this.props.onClick} />
      );
    }

    yearLinks.push(
      <a className="close blinker" onClick={this.close.bind(this)}>
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </a>
    );

    // We then add the list into the Menu. The library then changes everything into items of the menu.
    // As a result, when we add the list, it takes every element in the list and makes it into an item.
    return (
      <div>
        <Menu
          // noOverlay
          isOpen={!this.state.closed}
          onStateChange={state => this.handleStateChange(state)}
        >
          <h3 className="menuTitle">Years</h3>
          {yearLinks}
        </Menu>
      </div>
    );
  }
}
