import * as React from "react";

export class SearchButtonComponent extends React.Component<{ name: string }> {
  public render() {
    let name = this.props.name;
    var redirectLink = "/persons?name=" + name;
    return (
      <div className="search-button">
        <a href={redirectLink}>{name}</a>
      </div>
      // <div>
      //   <form action="/persons" method="get">
      //     <input type="hidden" name="name" value={name}></input>

      //     <button className="nameButton" type="submit">{name}</button>
      //   </form>
      // </div>

    );
  }
}
