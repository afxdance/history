import { slide as Menu } from "react-burger-menu";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
import * as React from "react";
import { SemLinkComponent } from "./SemLinkComponent";
import { YearCollapsibleComponent } from "src/components/YearCollapsibleComponent";

// Side menu component mainly made by the library react-burger-menu
export interface Sidebar {
  onClick: Function;
  closed: boolean;
}

const divStyle = {
  display: "none",
};

export class Sidebar extends React.Component<
  { onClick: Function },
  { closed: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      closed: false,
    };
  }

  //Use state in order to have the menu disappear when the close button is pushed
  public close() {
    this.setState({
      closed: true,
    });
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

    console.log(this.closed);

    // We then add the list into the Menu. The library then changes everything into items of the menu.
    // As a result, when we add the list, it takes every element in the list and makes it into an item.
    return (
      <Menu>
        <h3 className="menuTitle">Years</h3>
        {yearLinks}
      </Menu>
    );
  }
}
