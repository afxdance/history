import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Person } from "src/data/types";
import { SearchButtonComponent } from "./SearchButtonComponent";
import * as Data from "src/data/data";
import * as AFX from "src/data/data";

var searchBarText = "";

export class Searchbar extends React.Component<
  { onClick: Function }
  > {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <FilteredList />
    );
  }
}

var createReactClass = require('create-react-class');
var FilteredList = createReactClass({
  filterList: function (event: any) {
    searchBarText = event.target.value;
    // Reset search bar when there's no input text
    if (searchBarText == "") {
      this.setState({ items: [] })
    }
    else {
      var updatedList = this.state.initialItems;
      updatedList = updatedList.filter(function (item: any) {
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      // var updatedButtons: any = [];
      // for (let name in updatedList) {
      //   updatedButtons.push(<SearchButtonComponent name={name} />)
      // }
      this.setState({ items: updatedList });
    }
  },
  getInitialState: function () {
    var initialItems: any[] = [];
    for (var person in Data.People) {
      var name = Data.People[person]["name"];
      initialItems.push(name);
    }
    return {
      initialItems,
      items: [],
      // buttonItems: []
    }
  },

  render: function () {
    return (
      <div className="filter-list">
        <form action="/persons" method="get">
          <fieldset className="form-group">
            <div className="input-field">
              <img id="searchicon" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"></img>
              <input type="search" id="search" name="name" className="form-control form-control-lg" placeholder="Search for any board member or director" onChange={this.filterList} />
            </div>
          </fieldset>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

var List = createReactClass({
  render: function () {
    return (
      <ul>
        {
          this.props.items.map(function (item: any) {
            return <SearchButtonComponent name={item} />
          })
        }
      </ul>
    )
  }
});
