import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";

class Visie extends Component {
  state = {};

  render() {
    return (
      <div>
        <MenuAppBar />
        <div className="content">
          <h1 className="heading">VISIE</h1>
        </div>
      </div>
    );
  }
}

export default Visie;
