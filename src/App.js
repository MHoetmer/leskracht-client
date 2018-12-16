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
import Users from "./Components/Users";
import Educatiecirkel from "./Components/Educatiecirkel";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createTypography from "@material-ui/core/styles/createTypography";
import { createMuiTheme } from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import withTheme from "@material-ui/core/styles/withTheme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import Skillsfactory from "./Components/Skillsfactory";
import RBWKSpectrumbox from "./Components/RBWKSpectrumbox";

library.add(faIgloo);
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: ["Dosis"]
//   },
//   palette: {
//     primary: {
//       light: "#ffffff",
//       main: "#ffffff",
//       dark: "#ffffff"
//     }
//   }
// });

class App extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/visie" component={Visie} />
          <Route path="/producten" component={Producten} />
          <Route path="/meloo" component={Meloo} />
          <Route path="/webshop" component={Webshop} />
          <Route path="/ons" component={Ons} />
          <Route path="/Users" component={Users} />
          <Route path="/educatiecirkel" component={Educatiecirkel} />
          <Route path="/skillsfactory" component={Skillsfactory} />
          <Route path="/RBWKSpectrumbox" component={RBWKSpectrumbox} />
        </div>
      </Router>
      // </MuiThemeProvider>
    );
  }
}

export default withTheme()(App);
