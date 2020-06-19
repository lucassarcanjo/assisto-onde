import React from "react";
import { Route, Switch } from "react-router-dom";
import HomepageRoute from "./HomepageRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomepageRoute />
      </Route>
    </Switch>
  );
};

export default Routes;
