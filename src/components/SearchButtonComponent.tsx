import * as React from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";

export class SearchButtonComponent extends React.Component<{ name: string }> {
  public render() {
    let name = this.props.name;
    var redirectLink = "/persons?name=" + name;
    return (
      <div className="search-button">
        <Router>
          <Link to={redirectLink}>{name}</Link>
        </Router>
      </div>

    );
  }
}
