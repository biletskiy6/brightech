import React from "react";
import { UsersPage, DriversPage } from "../pages";
import { Route, Switch, Redirect } from "react-router";
const Main = () => {
  return (
    <main className="main col-sm-8">
      <Switch>
        <Route
          exact
          path="/"
          component={() => <h2>Тестовое задание</h2>}
        ></Route>
        <Route path="/users/" component={UsersPage}></Route>
        <Route path="/drivers/" component={DriversPage}></Route>
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default Main;
