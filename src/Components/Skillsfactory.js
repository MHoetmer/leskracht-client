import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Regenboogwereldkist from "../Images/Regenboogwereldkist.png";
import Meloo from "../Images/Meloo.png";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtomBanner from "./ButtomBanner";
import Fab from "@material-ui/core/Fab";
import { youtube1 } from "@fortawesome/react-fontawesome";

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
    fontFamily: "Dosis",
    textTransform: "inherit",
    textDecorationLine: "none",
    color: "#757575"
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
  }
});

class Skillsfactory extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MenuAppBar
          content={
            <Grid container direction="row" justify="center" spacing={16}>
              <Grid item key={5} xs={12}>
                <h1 className={classes.header}>SKILLSFACTORY</h1>
              </Grid>
            </Grid>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Skillsfactory);
