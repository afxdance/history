import { slide as Menu } from "react-burger-menu";
import * as AFX from "src/data/data";
import { Year } from "src/data/types";
import * as React from "react";
import { SemLinkComponent } from "./SemLinkComponent";
import { YearCollapsibleComponent } from "src/components/YearCollapsibleComponent";

// export default props => {
//   let semLinks = [];
//   for (let semKey in AFX.Semesters) {
//     console.log(this.props.onClick);
//     semLinks.push(
//       <SemLinkComponent semester={semKey} onClick={this.props.onClick} />
//     );
//   }

//   return <Menu>{semLinks}</Menu>;
// };

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

  public close() {
    this.setState({
      closed: true,
    });
  }

  public render() {
    let semLinks = [];
    for (let year of Object.keys(AFX.Years)) {
      semLinks.push(
        <YearCollapsibleComponent year={year} onClick={this.props.onClick} />
      );
    }

    console.log(this.closed);

    return (
      // <div className="menu" style={this.state.closed ? divStyle : {}}>
      <Menu>
        {/* <span>
            <button className="close" onClick={this.close.bind(this)}>
              x
            </button>
          </span> */}
        <h3 className="menuTitle">Years</h3>
        {semLinks}
      </Menu>
      // </div>
    );
  }
}
