import React, { Component } from "react";
import "./style.scss";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
const App = () => {
  return (
    <div className="App">
      <h1>Dominic Cobb</h1>
      <PhoneIcon />
      <EmailIcon />
      <GitHubIcon />
    </div>
  );
};

export default App;
