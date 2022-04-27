import React, { Component } from "react";

export class Class1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating the document");
      document.title = `clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return { count: prevState.count + 1 };
            });
          }}
        >
          {this.state.count}
        </button>
        <input
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default Class1;
