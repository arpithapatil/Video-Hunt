import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.handleChange}
          placeholder="Type your topic here . . . . . . ."
        />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchChange(this.state.term);
  }
}

export default SearchBar;
