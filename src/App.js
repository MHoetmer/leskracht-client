import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Visie from "./Components/Visie";
import Producten from "./Components/Producten";
import Meloo from "./Components/Meloo";
import Webshop from "./Components/Webshop";
import Ons from "./Components/Ons";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/visie" component={Visie} />
          <Route path="/producten" component={Producten} />
          {/*<Route path="/meloo" component={Meloo} />
          <Route path="/webshop" component={Webshop} />
          <Route path="/ons" component={Ons} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
