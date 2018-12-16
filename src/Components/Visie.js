import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { withStyles } from "@material-ui/core/styles";
import Leercirkel from "../Images/Leercirkel2.png";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    minHeight: 0,
    minWidth: 0,
    margin: theme.spacing.unit,
    lineHeight: 0.4
  }
});

class Visie extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MenuAppBar
          content={
            <div className="content">
              <Grid container direction="row" justify="center" spacing={16}>
                <Grid item key={1} xs={5} />
                <Grid item key={2} xs={2}>
                  <h1 className={classes.header}>VISIE</h1>
                </Grid>
                <Grid item key={3} xs={5} />
                <Grid item key={4} xs={6}>
                  <ReactPlayer
                    className={classes.youtube1}
                    url="https://www.youtube.com/embed/ybqNlUzWETU?autoplay=1"
                    playing
                    loop={true}
                    width="100%"
                  />
                </Grid>
                <Grid item key={5} xs={6}>
                  <h2 className={classes.header}>TOEKOMSTGERICHT ONDERWIJS</h2>
                  <h4 className={classes.text}>
                    In een wereld waarin kennis met een vingerveeg voorradig is,
                    mag je verwachten dat toekomstgericht onderwijs inzet op
                    digitale mogelijkheden. Tegelijkertijd is het van essentieel
                    belang om binnen een betekenisvolle en levensechte omgeving
                    aandacht te besteden aan houding, vaardigheden, denkwijzen
                    en basale kennis. Binnen de digitale en tastbare
                    leeromgevingen van Leskracht leren kinderen in een
                    coöperatieve setting door leerkracht geleide instructies,
                    uitdagende werkvormen, zelf gestelde (onderzoeks)vragen,
                    ontwerpend leren en eigen ervaringen.
                  </h4>
                </Grid>
                <Grid item key={6} xs={6}>
                  <h2 className={classes.header}>STRATEGIE</h2>
                  <h4 className={classes.text}>
                    Leskracht biedt een projectmatige aanpak die aansluit op de
                    ontwikkeling van een grote diversiteit aan leerlingen. Omdat
                    er niet één universele beste werkwijze is voor alle kinderen
                    uit de klas, zijn de digitale en tastbare leeromgevingen
                    ingericht als ruime gereedschapskisten waaruit leerkrachten
                    en leerlingen kunnen kiezen uit verschillende tools.
                    Eigenaarschap en zelf keuzes maken hebben een positieve
                    impact op de motivatie en stimuleert talentontwikkeling.
                  </h4>
                </Grid>
                <Grid item key={7} xs={6}>
                  <ReactPlayer
                    className={classes.youtube2}
                    url="https://www.youtube.com/embed/ybqNlUzWETU?autoplay=1"
                    playing
                    loop={true}
                    width="100%"
                  />
                </Grid>
                <Grid item key={8} xs={6}>
                  <img src={Leercirkel} className={classes.leercirkel} />
                </Grid>
                <Grid item key={9} xs={6}>
                  <h2 className={classes.header}>PROJECTMATIG WERKEN</h2>
                  <h4 className={classes.text}>
                    De randvoorwaarden van coöperatief en projectmatig werken
                    lopen als een rode draad door onze aanpak die op eigentijdse
                    wijze is vertaald in twee digitale en tastbare
                    leeromgevingen: de Regenboog Wereldkist voor groep 3 t/m 6
                    en Spectrumbox voor groep 6 t/m 8. Op de digitale
                    leeromgevingen wordt de doorgaande leerlijn van alle
                    leerinhouden van Mens & Samenleving, Natuur & Techniek,
                    Ruimte en Tijd weergegeven binnen samenhangende deelthema’s
                    die per project door de leerkracht geselecteerd worden. Met
                    een paar muisklikken staan de doelen, tools en bronnen van
                    het gekozen thema klaar. De eerste fase van onderzoekend
                    leren kan direct opgestart worden in de klas. De
                    projectmatige aanpak van Leskracht wordt als werkwijze vanaf
                    2020 verplicht gesteld. We hebben het hier over Wetenschap &
                    Technologie onderwijs: een onderzoekende en ontwerpende
                    manier van leren (learning by inquiry and design) waarbij
                    houding, vaardigheden, denkwijzen en kennis in samenhang
                    ontwikkeld worden.
                  </h4>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    size="small"
                  >
                    <Link to="educatiecirkel" className={classes.menuItem}>
                      <h2
                        variant="h6"
                        color="inherit"
                        className={classes.menuItem}
                        className={classes.arrow}
                      >
                        MEER OVER DE EDUCATIECIRKEL
                      </h2>
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Visie);
