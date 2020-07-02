import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./index.js";

const routes = [
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
        </BrowserRouter>
      </React.Fragment>
    </>
  );
};

export { routes };
