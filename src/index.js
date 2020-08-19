import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import Landing from "./LandingPage";

import "./style.scss";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    logged: false,
    error: "",
  });

  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Landing} />

        <Route exact path={process.env.PUBLIC_URL + "/login"}>
          <Login appState={appState} setAppState={setAppState} />
        </Route>

        <Route exact path={process.env.PUBLIC_URL + "/home"}>
          <Home setAppState={setAppState} />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
