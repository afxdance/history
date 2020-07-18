import * as React from "react";
import * as ReactDOM from "react-dom";
import { Person } from "src/data/types";
import { SearchButtonComponent } from "./SearchButtonComponent";
import { Route, HashRouter as Router, Redirect } from "react-router-dom";
import * as Data from "src/data/data";
import * as AFX from "src/data/data";

var searchBarText = "";
export const Searchbar: React.FC = () => {
  return <FilteredList />;
}

const FilteredList: React.FC = () => {
  const initNames: string[] = [];
  const initButtons: React.Component[] = [];
  const [buttons, setButtons] = React.useState(initButtons);
  const [names, setNames] = React.useState(initNames);

  function filterList(event: React.ChangeEvent<HTMLInputElement>) {
    searchBarText = event.target.value;
    console.log("The search bar val is " + searchBarText);
    // Reset search bar whe there's no input text
    if (searchBarText == "") {
      setButtons([]);
    } else {
      setInitialState();
      var updatedList = names.filter(function (name: string) {
        return (
          name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
        );
      });
      var newList: any[] = [];
      updatedList.slice(0, 10).forEach(function (item: string) {
        newList.push(<SearchButtonComponent name={item} />);
        newList.push(<br />);
      });
      setButtons(newList);
    }
  };

  function setInitialState() {
    var initialItems: string[] = [];
    for (var person in Data.People) {
      var name = Data.People[person]["name"];
      initialItems.push(name);
    }
    setNames(initialItems);
  };

  function checkEnter(event: any) {
    var code = event.keyCode ? event.keyCode : event.which;
    if (code == 13) {
      event.preventDefault();
    }
  };

  return (
    <div className="search-form">
      <form>
        <fieldset className="form-group">
          <div className="input-field">
            <input
              type="search"
              id="search"
              className="form-control form-control-lg"
              placeholder="Search for any board member or director"
              onChange={filterList}
              onKeyPress={checkEnter}
            />
          </div>
        </fieldset>
      </form>
      {buttons}
    </div>
  )
};

// takes list of names from updated list and generates search buttons'
const List: React.FC<{ items: [] }> = ({ items }) => {
  return (
    <ul>
      {items.map(function (item: any) {
        return <SearchButtonComponent name={item} />;
      })}
    </ul>
  );
}
