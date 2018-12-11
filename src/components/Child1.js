import React, { Component } from "react";

class Child1 extends Component {
  render() {
    return (
      <div>
        <div>Child 1</div>
        <div>{this.props.match.params.number}</div>
      </div>
    );
  }
}

export default Child1;
