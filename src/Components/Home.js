import React, { Component } from "react";
import MenuAppBar from "./MenuAppBar";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  myVideo: {
    position: "fixed",
    right: 0,
    bottom: 0,
    minWidth: "100%",
    minHeight: "100%"
  },

  /* Add some content at the bottom of the video/page */
  content: {
    position: "fixed",
    bottom: "0",
    background: "#f1f1f1",
    color: "#f1f1f1",
    width: "100%",
    padding: "20px"
  }
};

class Home extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MenuAppBar />
        <div className="content">
          <h1 className="heading">Google Fonts in React</h1>
          <h2 className="subheading">
            Learn how to add fonts in a React Project
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr />
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <iframe
            width="853"
            height="345"
            src="https://www.youtube.com/embed/ybqNlUzWETU?autoplay=1"
            frameborder="0"
          />
          <embed
            height="200"
            width="600"
            src="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.leskracht.nl&widgetid=1"
          />
          <video autoplay muted loop styles={classes.myVideo}>
            <source
              src="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.leskracht.nl&widgetid=1"
              type="video/mp4"
            />
          </video>

          <video
            loop
            muted
            autoplay
            playsinline
            poster="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.leskracht.nl&widgetid=1"
          >
            <source
              src="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.leskracht.nl&widgetid=1"
              type="video/mp4"
            />
          </video>
        </div>

        <iframe
          class="elementor-background-video-embed"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.leskracht.nl&amp;widgetid=1"
          id="widget2"
          style={{ width: "1852.44px", height: "1042px" }}
        />

        <video id="background-video" loop autoPlay>
          <source
            src="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.leskracht.nl&amp;widgetid=1"
            type="video/mp4"
          />
          <source
            src="https://www.youtube.com/embed/ybqNlUzWETU?controls=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.leskracht.nl&amp;widgetid=1"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
