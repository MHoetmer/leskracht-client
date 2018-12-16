import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Regenboogwereldkist from "../Images/Regenboogwereldkist.png";
import Skillsfactory from "../Images/Skillsfactory.png";
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

class Producten extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MenuAppBar
          content={
            <Grid container direction="row" justify="center" spacing={16}>
              <Grid item key={5} xs={12}>
                <h1 className={classes.header}>
                  PRODUCTEN & PROFESSIONALISERING
                </h1>
                <h4 className={classes.text}>
                  Leskracht biedt een breed palet aan trainingen en producten
                  die zich richten op onderwijsinnovatie voor het primair
                  onderwijs.Een deel is hieronder weergegeven. Daarnaast leveren
                  wij losse producten en ondersteunende diensten waaronder
                  maatwerk professionaliseringstrajecten, workshops en
                  (klassen)consultancy. Neem gerust contact met ons op voor
                  maatwerk en/of incompany trainingen
                </h4>
                <iframe
                  class="elementor-background-video-embed"
                  frameborder="0"
                  allowfullscreen="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title="YouTube video player"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/92h4ZIdYIZU?controls=0&rel=0&enablejsapi=1&origin=https://www.leskracht.nl&widgetid=1"
                  id="widget2"
                  style={{ width: "200", height: "200" }}
                />
              </Grid>
              <Grid item xs={6}>
                <h1 className={classes.header}>
                  REGENBOOG WERELDKIST & SPECTRUMBOX
                </h1>
                <h4 className={classes.text}>
                  De integrale leeromgevingen bestaan uit tastbaar en online
                  gereedschap. Het materiaal is per bouw aangepast aan de
                  psychologische ontwikkeling en geluksbeleving van de
                  leerlingen. Middels aansprekende stripfiguren worden de 7
                  stappen van onderzoekend, ontwerpend en ondernemend leren
                  uitgerold. Op kleurvolgorde van de regenboog leggen de
                  stripfiguren de functionele stappen van het werkproces uit. De
                  integrale leeromgevingen zijn niet alleen verleidelijk, maar
                  ook gericht op het functioneel bedienen van een grote
                  diversiteit aan kinderen.
                </h4>
                <Grid container justify="center">
                  <Fab
                    variant="extended"
                    aria-label="Delete"
                    className={classes.fab}
                    style={{ boxShadow: "none" }}
                  >
                    <Link
                      className={classes.menuItem}
                      style={{ color: "#ffffff" }}
                      to="/RBWKSpectrumbox"
                    >
                      Meer informatie >
                    </Link>
                  </Fab>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <img width={600} src={Regenboogwereldkist} />
              </Grid>
              <Grid item key={5} xs={12}>
                <iframe
                  class="elementor-background-video-embed"
                  frameborder="0"
                  allowfullscreen="1"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  title="YouTube video player"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/ag3GzJDy_yg?controls=0&rel=0&enablejsapi=1&origin=https://www.leskracht.nl&widgetid=1"
                  id="widget2"
                  style={{ width: "200", height: "200" }}
                />
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.videobutton}
                  size="small"
                  style={{ borderRadius: 20 }}
                >
                  <Link to="educatiecirkel" className={classes.videobuttonText}>
                    <h2 variant="h6" color="inherit">
                      Meer weten? Bekijk de folder..
                    </h2>
                  </Link>
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.videobutton}
                  size="small"
                  style={{ borderRadius: 20 }}
                >
                  <Link to="educatiecirkel" className={classes.videobuttonText}>
                    <h2 variant="h6" color="inherit">
                      .. of bekijk de video.
                    </h2>
                  </Link>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <h1 className={classes.header}>SKILLSFACTORY</h1>
                <h4 className={classes.text}>
                  De Skillsfactory is het inspiratie- en trainingscentrum voor
                  het nieuwe leren in Noord Holland. Ons doel is om een
                  vraaggericht aanbod aan te bieden en kennisdeling te
                  stimuleren tussen onderwijsprofessionals die vanuit interesse
                  en/of leerbehoefte willen professionaliseren en samenwerken
                  aan toekomstgericht onderwijs.
                </h4>
                <Fab
                  variant="extended"
                  aria-label="Delete"
                  className={classes.fab}
                  style={{ boxShadow: "none" }}
                >
                  <Link
                    className={classes.menuItem}
                    style={{ color: "#ffffff" }}
                    to="/skillsfactory"
                  >
                    Meer informatie >
                  </Link>
                </Fab>
              </Grid>
              <Grid item xs={6}>
                <img width={600} src={Skillsfactory} />
              </Grid>
              <Grid className={classes.bluespace} container>
                <Grid item xs={6}>
                  <img width={400} src={Meloo} />
                </Grid>
                <Grid item xs={6}>
                  <h1 className={classes.header} className={classes.bluespace}>
                    MELOO
                  </h1>
                  <h4 className={classes.text}>
                    Meloo staat voor Mijn Eigen Leer- en Ontwikkelomgeving.
                    Hiermee wordt onderzoekend leren/projectmatig werken
                    volledig gefaciliteerd. Binnen Meloo is het kinderlijk
                    eenvoudig om thema’s, projecten en weektaken te koppelen aan
                    inhoudsleerlijnen. Daarnaast worden de leerlingprestaties en
                    -vorderingen op deze gebieden met één klik verwerkt in het
                    Leerling Volgsysteem (LVS)
                  </h4>
                  <Fab
                    variant="extended"
                    aria-label="Delete"
                    className={classes.fab}
                    style={{ boxShadow: "none", backgroundColor: "#f49603" }}
                  >
                    <Link
                      className={classes.menuItem}
                      style={{ color: "#ffffff" }}
                      to="/meloo"
                    >
                      {"< Meer informatie"}
                    </Link>
                  </Fab>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <ButtomBanner />
              </Grid>
            </Grid>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Producten);
