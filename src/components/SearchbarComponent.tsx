import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Person } from "src/data/types";
import { SearchButtonComponent } from "./SearchButtonComponent";
import { Route, HashRouter as Router, Redirect } from "react-router-dom";
import * as Data from "src/data/data";
import * as AFX from "src/data/data";

var searchBarText = "";
export class Searchbar extends React.Component {
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

  // submitForm: function (e: { preventDefault: () => void; }) {
  //   this.props.history.push('/yeet')
  // },

  render: function () {

    return (
      <div className="search-form">
        <form onSubmit={(e) => {
          console.log(this.refs.personName.value);
          var redirectLink = "/persons?name=" + this.input.value;

          return (
            <Router>
              <Redirect to="/persons"></Redirect>
            </Router>
          );
        }}>
          <fieldset className="form-group">
            <div className="input-field">
              <input type="search" id="search" ref="personName" className="form-control form-control-lg" placeholder="Search for any board member or director" onChange={this.filterList} />
            </div>
          </fieldset>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});

// takes list of names from updated list and generates search buttons
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
