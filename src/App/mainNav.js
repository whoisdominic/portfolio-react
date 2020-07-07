import React, { Component } from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const MainNav = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const home = () => {
    history.push("/");
  };
  const resume = () => {
    history.push("/resume");
  };
  const portfolio = () => {
    history.push("/portfolio");
  };
  const blog = () => {
    history.push("/blog");
  };
  const contact = () => {
    history.push("/contact");
  };
  return (
    <div className="App">
      <header className="nav-head">
        <div className="triangle-topleft">
          <div className="tri-content">
            <h1 onClick={home}>Dominic Cobb</h1>
            <h3>Software Engineer</h3>
            <div className="icons">
              <a href="tel:2064896538">
                <PhoneIcon />
              </a>
              <span />
              <a href="mailto: me@dominiccobb.dev">
                <EmailIcon />
              </a>
              <span />
              <a href="http://www.github.com/whoisdominic" target="_blank">
                <GitHubIcon />
              </a>
              <span />
              <a
                href="https://www.linkedin.com/in/dominiccobb/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="nav-cont">
            <Button onClick={home} variant="outlined" color="primary">
              About
            </Button>
            <Button onClick={resume} variant="outlined" color="primary">
              Resume
            </Button>
            <Button onClick={portfolio} variant="outlined" color="primary">
              Portfolio
            </Button>
            <Button onClick={contact} variant="outlined" color="primary">
              Contact
            </Button>
          </div>
        </div>
      </header>
      <br />
    </div>
  );
};

export default MainNav;
