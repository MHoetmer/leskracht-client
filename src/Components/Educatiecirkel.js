import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Leercirkel from "../Images/Leercirkel2.png";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import AddIcon from "@material-ui/icons/ArrowUpward";

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
  bluespace: {
    backgroundColor: "#6ec0e4",
    color: "#ffffff"
  }
});

class Educatiecirkel extends Component {
  state = {};

  moveUp = () => {
    console.log("move UP?");
    //ReactDOM.findDOMNode(this).scrollTop = 0;
    ReactDOM.findDOMNode(this).scrollIntoView();
  };

  componentDidUpdate() {}

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MenuAppBar
          content={
            <Grid container direction="row" justify="center" spacing={16}>
              <Grid item key={5} xs={12}>
                <h1 className={classes.header}>EDUCATIECIRKEL</h1>
                <h4 className={classes.text}>
                  De Educatiecirkel is een model voor de integrale aanpak
                  waarbinnen onderzoekend en ontwerpend leren wordt benut om de
                  nieuwsgierigheid op te wekken en kinderen te stimuleren tot
                  actief en creatief leren. De integrale aanpak van Leskracht is
                  gebaseerd op een holistische visie, wat betekent dat de hele
                  ontwikkeling van het kind centraal staat binnen de
                  projectmatige manier van werken. Kinderen worden vanuit hun
                  beleving aangesproken om vaardigheden te ontwikkelen en kennis
                  op te doen op het gebied van:
                </h4>
                <ul>
                  <li className={classes.text}>
                    <b>Inhoud: </b>
                    Kerndoelenwereldoriëntatie en taalvorming (Tule SLO);
                  </li>
                  <li className={classes.text}>
                    {" "}
                    <b>Persoonsvorming:</b> Talentontwikkeling (geïnspireerd op
                    de meervoudige intelligenties van Gardner en de
                    denkprofielen van Stenberg);{" "}
                  </li>
                  <li className={classes.text}>
                    <b>Socialisatie:</b> Gedragsvorming en coöperatief leren;
                  </li>
                  <li>
                    <b>Houding: </b>Onderzoekend en ondernemend;{" "}
                  </li>
                  <li className={classes.text}>
                    <b>Digitale leer- en werkomgeving:</b> Stimulans ICT
                    vaardigheden;{" "}
                  </li>
                  <li className={classes.text}>
                    <b>Metacognitie: </b>Aandacht voor 21e eeuwse vaardigheden.
                  </li>
                </ul>
              </Grid>
              <Grid className={classes.bluespace} container>
                <Grid item xs={6}>
                  <h1 className={classes.bluespace}>
                    Doorlopend leerproces in leren leren
                  </h1>
                  <h4 className={classes.text}>
                    Het model geeft weer hoe leerlingen de leercirkel op de
                    kleurvolgorde van de regenboog doorlopen. Er is onderscheid
                    gemaakt in de psychologische ontwikkeling en geluksbeleving
                    van kinderen van 6 t/m 9 jaar en ouder. Ieder project wordt
                    afgesloten met een presentatie waarin het antwoord op de
                    eerder gestelde onderzoeksvraag wordt uitgelegd. Bij de
                    evaluatie worden persoonlijke leerpunten benoemd, die
                    meegenomen worden als leerdoelen en aandachtspunten in een
                    volgend project. Kinderen worden aangespoord om kritisch te
                    denken, zelfstandig op zoek te gaan naar informatie, vragen
                    te stellen en vaardigheden te ontwikkelen die binnen alle
                    (leer)gebieden van belang zijn.
                  </h4>
                </Grid>
                <Grid item xs={6}>
                  <img src={Leercirkel} className={classes.leercirkel} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <h1 className={classes.header}>
                    {" "}
                    Holistische visie met eenvoudige tools
                  </h1>
                  <h4 className={classes.text}>
                    “Hoe bereid ik een grote diversiteit aan kinderen voor op
                    een leven lang leren in een wereld die in hoog tempo
                    digitaliseert?” Onze visie is omgezet in een tastbaar
                    instrument met een leerkrachtvriendelijk bedieningspaneel,
                    als antwoord op deze veel gestelde onderwijsvraag. Twee ruim
                    gevulde “gereedschapskisten” bieden maatwerk aan iedere
                    leerling en zijn voorzien van tastbare tools inclusief een
                    digitale leeromgeving met video-instructies, een portfolio
                    en online bibliotheken gevuld met veelzijdig educatief
                    materiaal gelinkt aan de TULE van de kerndoelen.
                  </h4>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    size="small"
                  >
                    <Link to="educatiecirkel" className={classes.menuItem}>
                      <h2 className={classes.menuItem}>
                        MEER OVER DE LEEROMGEVINGEN
                      </h2>
                    </Link>
                  </Button>
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={1}>
                  <Button
                    variant="fab"
                    color="primary"
                    aria-label="Add"
                    onClick={this.moveUp}
                  >
                    <AddIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Educatiecirkel);
