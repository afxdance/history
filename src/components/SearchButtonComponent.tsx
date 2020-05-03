import * as React from "react";
import Popup from "reactjs-popup";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { IndividualComponent } from 'src/components/IndividualComponent';

export class SearchButtonComponent extends React.Component<{ name: string }> {
  public render() {
    let name = this.props.name;
    return (
      <Popup trigger={<button className="button"> <span className="nav-text">{name}</span> </button>} modal closeOnDocumentClick>
        <span><IndividualComponent name={name}></IndividualComponent></span>
      </Popup>

    );
  }
}
