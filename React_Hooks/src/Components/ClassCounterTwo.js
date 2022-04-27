import React, { Component } from "react";

export default class classCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.count}</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
