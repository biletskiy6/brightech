import React from "react";
import { Route } from "react-router";
import Header from "../header";
import ForLoginUsers from "../for-login-users";
import LoginForm from "../login-form";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route path="/login/" component={LoginForm} />
      <ForLoginUsers />
    </div>
  );
};

export default App;
