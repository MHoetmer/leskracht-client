import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";

class Producten extends Component {
  state = {};

  render() {
    return (
      <div>
        <MenuAppBar />
        <div className="content">
          <h1 className="heading">PRODUCTEN</h1>
        </div>
      </div>
    );
  }
}

export default Producten;
