import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = e => {
    //google spread operator
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  search = e => {
    this.props.setText(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='search...'
          id='searchTerm'
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.search}>SEARCH</button>{" "}
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Search;
