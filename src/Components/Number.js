import React, { Component } from "react";

class Number extends Component {
  state = {
    numberBox: []
  };

  handleChange = e => {
    //google spread operator
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  number = e => {
    this.props.setNum(this.state.numberBox);
  };

  render() {
    return (
      <div>
        <input
          type='number'
          placeholder='number...'
          id='numberBox'
          value={this.state.numberBox}
          onChange={this.handleChange}
        />
        <button onClick={this.num}>Submit</button> <span>{this.props.num}</span>
      </div>
    );
  }
}

export default Number;
