import React, { Component } from "react";

export class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  tick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  componentDidMount() {
    this.Interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default IntervalClassCounter;
