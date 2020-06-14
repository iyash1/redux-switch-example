import React, { Component } from "react";

class Switch extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onToggle();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Click Me!</button>
      </div>
    );
  }
}

export default Switch;
