import * as React from "react";
import * as ReactDOM from "react-dom";
import { Person } from "src/data/types";
import { SearchButtonComponent } from "./SearchButtonComponent";
import { Route, HashRouter as Router, Redirect } from "react-router-dom";
import * as Data from "src/data/data";
import * as AFX from "src/data/data";

export const Searchbar: React.FC = () => {
  return <FilteredList />;
}

const FilteredList: React.FC = () => {
  const [buttons, setButtons] = React.useState<string[]>([]);
  const [names, setNames] = React.useState<string[]>([]);

  const filterList = (event: React.ChangeEvent<HTMLInputElement>) => {
    let searchBarText = event.target.value;
    // Reset search bar whe there's no input text
    if (searchBarText === "") {
      setButtons([]);
    } else {
      setInitialState();
      let updatedList = names.filter((name: string) => {
        return (
          name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
        );
      });
      let newList: any[] = [];
      updatedList.slice(0, 10).forEach((item: string) => {
        newList.push(<SearchButtonComponent name={item} />);
        newList.push(<br />);
      });
      setButtons(newList);
    }
  };

  const setInitialState = () => {
    let initialItems: string[] = [];
    for (let person in Data.People) {
      let name = Data.People[person]["name"];
      initialItems.push(name);
    }
    setNames(initialItems);
  };

  const checkEnter = (event: any) => {
    let code = event.keyCode ? event.keyCode : event.which;
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
