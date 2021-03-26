import React from "react";
import { Switch, Route } from "react-router-dom";
import Hub from "../components/controllers/hub";
import "../index.scss";

document.title = "react app";

const Routes = () => (
  <Switch>
    <Route path="/" exact strict component={Hub} />
  </Switch>
);

export default Routes;
