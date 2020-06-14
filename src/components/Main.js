import React, { Component } from "react";
import Switch from "./Switch";
import Display from "./Display";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      switch: false,
    };

    this.switchToggle = this.switchToggle.bind(this);
  }

  switchToggle() {
    this.setState({ switch: !this.state.switch });
  }

  render() {
    return (
      <div>
        <Switch onToggle={this.switchToggle} />
        <Display switch={this.state.switch} />
      </div>
    );
  }
}

export default Main;
