import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}
