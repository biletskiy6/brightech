import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrightechServiceProvider } from "./components/brightech-service-context";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import BrightechService from "./services/brightechService";
import store from "./store";
import "./index.scss";

const brightechService = new BrightechService();

ReactDOM.render(
  <Provider store={store}>
    <BrightechServiceProvider value={brightechService}>
      <Router>
        <App />
      </Router>
    </BrightechServiceProvider>
  </Provider>,
  document.getElementById("root")
);
