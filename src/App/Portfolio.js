import React, { Component } from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const Portfolio = (props) => {
  const matches = useMediaQuery("(min-width:600px)");
  let imageClass = matches ? "portfolio-img-large" : "portfolio-img";
  return (
    <>
      <div className="App">
        <div className="home-cont">
          <h1 className="section-title">Portfolio</h1>
          <span />

          <div className="any-cont">
            <Paper elevation={3}>
              <br />
              <h1>Goat Ranker</h1>
              <div className="any-cont2">
                <br />
                <p>
                  Final project for General Assembly
                  <br /> <br /> Made with: React, Express, Spotify Api, Mongodb,
                  Material-UI
                </p>
                <br />
                <p>
                  See the project at{" "}
                  <a href="http://www.goatranker.com">Goatranker.com </a>
                </p>
                <br />
                <a href="http://www.goatranker.com">
                  <img
                    className={imageClass}
                    src={require("../images/goatrankerscrnshot.png")}
                    alt="goat ranker"
                  />
                </a>
              </div>
            </Paper>
            <br />
            <Paper elevation={3}>
              <br />
              <h1>Turnout</h1>
              <div className="any-cont2">
                <br />
                <p>
                  Group project for General Assembly
                  <br /> <br /> Made with: React, Express, Mongodb, Node
                </p>
                <br />
                <p>
                  See the project at{" "}
                  <a href="https://turnout-nova.netlify.app/">Turnout</a>
                </p>
                <br />
                <a href="https://turnout-nova.netlify.app/">
                  <img
                    className={imageClass}
                    src={require("../images/turnoutscreenshot.png")}
                    alt="goat ranker"
                  />
                </a>
              </div>
            </Paper>
            <br />
            <Paper elevation={3}>
              <br />
              <h1>Uno Island</h1>
              <div className="any-cont2">
                <br />
                <p>
                  First project for General Assembly
                  <br /> <br /> Made with: HTML, CSS, Javascript, JQuery
                </p>
                <br />
                <p>
                  See the project at{" "}
                  <a href="https://whoisdominic.github.io/Uno-project/">
                    Uno Island
                  </a>
                </p>
                <br />
                <a href="https://whoisdominic.github.io/Uno-project/">
                  <img
                    className={imageClass}
                    src={require("../images/unoislandscrnshot.png")}
                    alt="goat ranker"
                    domi
                  />
                </a>
                <br />
                <br />
                <br />
              </div>
            </Paper>
            <br />

            <br />
            <Paper elevation={3}>
              <div className="center-cont-about">
                {matches ? (
                  <>
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                ) : (
                  <></>
                )}
                <h1>Ready to connect?</h1>
                <div className="icons">
                  <a href="tel:2064896538">
                    <PhoneIcon />
                  </a>
                  <span />
                  <span />
                  <a href="mailto: me@dominiccobb.dev">
                    <EmailIcon />
                  </a>
                  <span />
                  <span />
                  <a href="http://www.github.com/whoisdominic" target="_blank">
                    <GitHubIcon />
                  </a>
                  <span />
                  <span />
                  <a
                    href="https://www.linkedin.com/in/dominiccobb/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <span />
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
