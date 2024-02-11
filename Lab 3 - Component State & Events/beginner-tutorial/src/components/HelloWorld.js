import React, { Component } from "react";
import Greeting from "./Greeting";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, React!",
    };
  }

  changeMessage = () => {
    this.setState({ message: "Welcome to React!" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
        <Greeting message={this.state.message} />
      </div>
    );
  }
}

export default HelloWorld;
