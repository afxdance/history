import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Person } from "src/data/types"
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
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item: any) {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  },
  getInitialState: function () {
    var initialItems: string[] = [];
    for (var person in Data.People) {
      initialItems.push(Data.People[person]["name"]);
    }
    return {
      initialItems,
      items: []
    }
  },

  render: function () {
    if (searchBarText != "") {
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
    } else {
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
        </div>
      );
    }
  }
});

var List = createReactClass({
  render: function () {
    return (
      <ul className="list-group">
        {
          this.props.items.map(function (item: any) {
            return <ul className="list-group-item" data-category={item}>{item}</ul>
          })
        }
      </ul>
    )
  }
});
