import React, { Component } from "react";

class Class2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePoisition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePoisition);
  }
  render() {
    return (
      <div>
        x:{this.state.x} y:{this.state.y}
      </div>
    );
  }
}

export default Class2;
