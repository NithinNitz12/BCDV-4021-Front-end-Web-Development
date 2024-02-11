import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

export default Greeting;