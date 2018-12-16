import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Regenboogwereldkist from "../Images/Regenboogwereldkist.png";
import Skillsfactory from "../Images/Skillsfactory.png";
import Meloo from "../Images/Meloo.png";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { youtube1 } from "@fortawesome/react-fontawesome";
import Leskracht from "../Images/Logo.png";

const styles = theme => ({
  header: {
    color: "#757575"
  },
  text: {
    lineHeight: 1.8,
    fontWeight: 200
  },
  youtube1: {
    marginLeft: -130,
    overflowX: "auto"
  },
  youtube2: {
    marginRight: -130,
    overflowX: "auto"
  },
  leercirkel: {
    width: "95%",
    marginTop: "50px"
  },
  menuItem: {
    fontSize: 16,
    fontFamily: "Dosis",
    textTransform: "inherit",
    textDecorationLine: "none",
    color: "#ffffff",
    "&:hover": {
      color: "#40a9ff",
      opacity: 100,
      background: "#3f51b5"
    }
  },
  button: {
    fontWeight: 200,
    letterSpacing: "1.7px",
    textTransform: "uppercase",
    minHeight: 0,
    minWidth: 0,
    margin: theme.spacing.unit,
    lineHeight: 0.4,
    color: "#6ec0e4",
    borderColor: "#6ec0e4",
    borderRadius: 8,
    border: "3px solid",
    "&:hover": {
      borderColor: "#42403e",
      opacity: 100,
      border: "3px solid",
      backgroundColor: "#42403e",
      color: "#b39573"
    }
  },
  fab: {
    marginTop: "20px",
    justify: "center",
    fontSize: "20px",
    textTransform: "lowercase",
    fontFamily: "Dosis",
    fontWeight: 400,
    backgroundColor: "#62ce70",
    color: "#ffffff",
    paddingLeft: "40px",
    paddingRight: "40px",
    "&:hover": {
      opacity: 100,
      backgroundColor: "#000000",
      color: "#ffffff"
    }
  },
  bluespace: {
    backgroundColor: "#6ec0e4",
    color: "#ffffff"
  },
  videobutton: {
    borderColor: "#ffffff",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 8,
    border: "3px solid",
    "&:hover": {
      opacity: 100,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      borderRadius: 8,
      border: "3px solid",
      borderColor: "#ffffff"
    }
  },
  videobuttonText: {
    paddingLeft: "10px",
    paddingRight: "10px",
    fontFamily: "Dosis",
    textTransform: "lowercase",
    textDecorationLine: "none",
    color: "#ffffff"
  },
  appBar: {
    top: "auto",
    bottom: -1550
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon: {
    margin: "5px"
  }
});

class Producten extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
          crossorigin="anonymous"
        />
        <MenuAppBar
          content={
            <React.Fragment>
              <AppBar
                position="absolute"
                color="primary"
                className={classes.appBar}
              >
                <Toolbar className={classes.toolbar}>
                  <img width={150} src={Leskracht} />
                  <Link className={classes.menuItem} to="/">
                    <h3 variant="h6" color="inherit">
                      Algemene Voorwaarden
                    </h3>
                  </Link>
                  <Link className={classes.menuItem} to="/">
                    <h3 variant="h6" color="inherit">
                      Privacy
                    </h3>
                  </Link>
                  <Link className={classes.menuItem} to="/">
                    <h3 variant="h6" color="inherit">
                      Disclaimer
                    </h3>
                  </Link>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      className={classes.icon}
                      style={{ backgroundColor: "#ea4334", color: "#ffffff" }}
                    >
                      <i class="far fa-envelope fa-2x" />
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.icon}
                      style={{ backgroundColor: "#cc1f1e", color: "#ffffff" }}
                    >
                      <i class="fab fa-youtube fa-2x" />
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.icon}
                      style={{ backgroundColor: "#1da1f2", color: "#ffffff" }}
                    >
                      <i class="fab fa-twitter fa-2x" />
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.icon}
                      style={{ backgroundColor: "#3b5997", color: "#ffffff" }}
                    >
                      <i class="fab fa-facebook-f fa-2x" />
                    </Button>
                  </Grid>
                </Toolbar>
              </AppBar>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Producten);
