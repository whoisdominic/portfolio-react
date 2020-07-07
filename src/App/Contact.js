import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const Contact = (props) => {
  return (
    <>
      <div className="App">
        <div className="home-cont">
          <span />
          <div className="any-cont">
            <Paper elevation={3}>
              <div className="any-cont">
                <p>Feel Free to click the icons in the top left or see below</p>
                <br />
                <h2>Phone</h2>
                <br />
                <a href="tel:2064896538">
                  <PhoneIcon />
                  <h3>206-489-6538</h3>
                </a>
                <br />
                <h2>Email</h2>
                <br />
                <a href="mailto: me@dominiccobb.dev">
                  <EmailIcon />
                  <h3>me@dominiccobb.dev</h3>
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/dominiccobb/"
                  target="_blank"
                >
                  <LinkedInIcon />
                  <h3>Message me on LinkedIn</h3>
                </a>
                <br />
                <br />
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
