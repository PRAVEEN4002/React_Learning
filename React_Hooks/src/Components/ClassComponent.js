import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
