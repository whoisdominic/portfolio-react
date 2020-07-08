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

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div className="App">
      <div className="home-cont">
        <h1 className="section-title">About Me</h1>
        <span />
        {matches ? (
          <></>
        ) : (
          <img
            className="photo_of_me_mob"
            src={require("../images/1FCB86D8-6A2B-422D-86D1-56372B6231D2.jpeg")}
            alt="Dominic Cobb"
          />
        )}

        <div className="any-cont">
          <Paper elevation={3}>
            <p className="about-txt">
              I Thrive on a goal focused team hungry to deliver quality
              products. <br />
              <br /> My experience outside of the tech industry has allowed me
              to cultivate an attitude of positivity in the face of adversity.
              <br /> <br />
              Enhancing my ability to adapt to ever-changing technologies,
              blended with the decisiveness needed in today’s fast-paced
              markets.
            </p>
          </Paper>
          <br />
          <Paper elevation={3}>
            <p className="about-txt">
              Born and raised in Bellevue Washington, a stones throw away from a
              little company called Microsoft. <br />
              <br /> I've always been facinated with technology and how it can
              change the world!
              <br /> <br />
              Whether you need a beatiful website, a powerfull Api, or a mobile
              app made for your business.
              <br /> I am more than up to the task!
            </p>
          </Paper>
          <br />
          <Paper elevation={3}>
            <div className="about-txt">
              <h2>Technologies</h2>
              <br />
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Javascript</li>
                <li>ES6</li>
                <li>Typescript</li>
                <li>Node</li>
                <li>Babel</li>
                <li>Gulp</li>
                <li>Python</li>
                <li>Django</li>
                <li>Go</li>
                <li>React</li>
                <li>React Native</li>
                <li>NextJs</li>
                <li>Spotify Api</li>
                <li>Graphql</li>
                <li>Postgresql</li>
                <li>MongoDb</li>
                <li>Agile/Scrum</li>
                <li>Mailchimp</li>
              </ul>
            </div>
          </Paper>
          <br />
          <Paper elevation={3}>
            <div className="center-cont-about">
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
  );
};

export default Home;
