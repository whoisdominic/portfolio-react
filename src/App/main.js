import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// Components
import Home from "./index.js";
import MainNav from "./mainNav.js";
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
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/",
    component: Home,
    name: "Home",
  },
];

export default () => {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
        </BrowserRouter>
      </React.Fragment>
    </>
  );
};

export { routes };
