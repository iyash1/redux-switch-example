import React, { Component } from "react";
import Switch from "./Switch";
import Display from "./Display";

class Main extends Component {
  constructor() {
    super();

    this.switchToggle = this.switchToggle.bind(this);
  }

  switchToggle() {
    this.props.flipSwitch(!this.props.switch);
  }

  render() {
    return (
      <div>
        <Switch onToggle={this.switchToggle} />
        <Display switch={this.props.switch} />
      </div>
    );
  }
}

export default Main;
