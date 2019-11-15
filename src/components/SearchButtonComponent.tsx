import * as React from "react";

export class SearchButtonComponent extends React.Component<{ name: string }> {
  public render() {
    let name = this.props.name;
    var redirectLink = "/persons?name=" + name;
    return (
      <div className="search-button">
        <a href={redirectLink}>{name}</a>
      </div>

    );
  }
}
