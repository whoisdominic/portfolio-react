import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// Components
import Home from "./index.js";
import MainNav from "./mainNav.js";
import Resume from "./Resume.js";
import Portfolio from "./Portfolio.js";
import Contact from "./Contact.js";
// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
  },
});

const routes = [
  {
    path: "/contact",
    component: Contact,
    name: "Contact",
  },
  {
    path: "/resume",
    component: Resume,
    name: "Resume",
  },
  {
    path: "/portfolio",
    component: Portfolio,
    name: "Portfolio",
  },
  {
    path: "/",
    component: Home,
    name: "Home",
  },
];

export default () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="app-cont">
            <MainNav />
            <Switch>
              {routes.map((route) => {
                return (
                  <Route
                    path={route.path}
                    component={route.component}
                    key={route.name}
                  ></Route>
                );
              })}
            </Switch>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export { routes };
