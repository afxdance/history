import * as React from "react";
import * as ReactDOM from 'react-dom';

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
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item: any) {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  },
  getInitialState: function () {
    return {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    }
  },
  componentWillMount: function () {
    this.setState({ items: this.state.initialItems })
  },
  render: function () {
    return (
      <div className="filter-list">
        <form action="/persons" method="get">
          <fieldset className="form-group">
            <input type="text" name="name" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
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
      <ul className="list-group">
        {
          this.props.items.map(function (item: any) {
            return <li className="list-group-item" data-category={item} key={item}>{item}</li>
          })
        }
      </ul>
    )
  }
});
