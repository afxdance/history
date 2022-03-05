import { slide as Menu } from "react-burger-menu"
import * as AFX from "src/data/data"
import * as React from "react"
import { SemLinkComponent } from "./SemLinkComponent"
import { Year } from "src/data/types"
import { YearCollapsibleComponent } from "src/components/YearCollapsibleComponent"

 //New Imports (for now)
import "./App.css" //imported to access specifications for sidebar
import { NavItem, NavLink, Nav } from "reactstrap"


 // Side menu component mainly made by the library react-burger-menu
export interface Sidebar {
  onClick: Function
  closed: boolean
}

export class Sidebar extends React.Component<
  { onClick: Function },
  { closed: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      closed: false,
    }
  }

  // Use state in order to have the menu disappear when the close button is pushed
  // public close() {
  //   this.setState({
  //     closed: true,
  //   });
  // }

  public render() {
    // We first iterate through all the years and push the components into the list.
    let yearLinks: any = []
    for (let year of Object.keys(AFX.Years)) {
      yearLinks.push(
        // We have the onclick function passed through the Sidebar component to be sent to the year component.
        <YearCollapsibleComponent year={year} onClick={this.props.onClick} />
      )
    }

    // console.log(this.closed);

    // We then add the list into the Menu. The library then changes everything into items of the menu.
    // As a result, when we add the list, it takes every element in the list and makes it into an item.
    return (
      <div id="sidebar" className="sidebar">
        <div className="sidebar-header">
          <span color="info" style={{ color: "#fff" }}>
            &times;
          </span>
          <h3 className="sidebar-header-text">AFX History</h3>
        </div>
        <div className="side-menu">
          <Nav vertical="true" className="list-unstyled pb-3">
            <ul style={{ listStyleType: "none", padding: 0 }}>{yearLinks}</ul>
            {/* <Menu>
              {yearLinks}
            </Menu> */}
          </Nav>
        </div>
      </div>

      // <Menu>
      //   <h3 className="menuTitle">Years</h3>
      //   {yearLinks}
      // </Menu>
    )
  }
}
