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

const Resume = (props) => {
  return (
    <>
      <div className="app-page">
        <h1 className="page-title">Resume</h1>
      </div>
    </>
  );
};

export default Resume;
