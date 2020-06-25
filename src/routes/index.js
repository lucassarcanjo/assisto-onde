import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import ContentRoute from "./ContentRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeRoute />
      </Route>
      <Route path="/content/:id">
        <ContentRoute />
      </Route>
    </Switch>
  );
};

export default Routes;
