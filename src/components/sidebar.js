import { slide as Menu } from "react-burger-menu";
import * as AFX from "src/data/data";
import * as React from "react";
import { SemLinkComponent } from "./SemLinkComponent";

export default props => {
  let semLinks = [];
  for (let semKey in AFX.Semesters) {
    semLinks.push(
      <SemLinkComponent semester={semKey} onClick={this.onClick} />
    );
  }

  return <Menu>{semLinks}</Menu>;
};
