import React, { Component } from "react";
import "./style.scss";
import MainNav from "./mainNav.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Paper } from "@material-ui/core";
import PhotoOfMe from "../images/img_20180727_151433_915.jpeg";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div className="app-page">
      <h1 className="page-title">About me</h1>
      <div className="about-cont">
        <p>
          I thrive on a goal focused team hungry to deliver quality products. My
          experience outside of the tech industry has allowed me to cultivate an
          attitude of positivity in the face of adversity. Enhancing my ability
          to adapt to ever-changing technologies, blended with the decisiveness
          needed in today’s fast-paced markets.
        </p>
        <br />
        <p>
          Born and raised in Bellevue Washington, a stones throw away from a
          little company called Microsoft. I've always been facinated with
          technology and how it can change the world! Whether you need a
          beatiful website, a powerfull Api, or a mobile app made for your
          business. I am more than up to the task!
        </p>
      </div>
      <div className="bottom-about">
        <div className="skills-cont">
          <img src={PhotoOfMe} className="img" alt="Dominic Cobb" />
          <div className="skill">
            <h2>Languages</h2>
            <br />
            <ul>
              <li>HTML</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Kotlin</li>
            </ul>
          </div>
          <div className="skill">
            <h2>Frameworks/Libraries</h2>
            <br />
            <ul>
              <li>React</li>
              <li>React-Native</li>
              <li>Nodejs</li>
              <li>Express</li>
              <li>NextJs</li>
              <li>Expo</li>
              <li>jQuery</li>
              <li>Redux</li>
              <li>Material</li>
              <li>Reanimated</li>
            </ul>
          </div>
          <div className="skill">
            <h2>Database/API</h2>
            <br />
            <ul>
              <li>MongoDb</li>
              <li>Postgresql</li>
              <li>GraphQL</li>
              <li>Firebase</li>
              <li>DynamoDB</li>
            </ul>
          </div>
          <div className="skill">
            <h2>Misc</h2>
            <br />
            <ul>
              <li>GIT</li>
              <li>Heroku</li>
              <li>AWS</li>
              <li>Digital Ocean</li>
              <li>Linux</li>
              <li>REST-API</li>
              <li>Babel</li>
              <li>X-code</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
