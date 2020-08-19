import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import registerIcons from "./fontLib";
import { actions } from "./store/ducks/auth.duck";
import "./styles/fontStyles.css";

import store, { persistor } from "./store/store";
import App from "./App";

registerIcons();

// store.dispatch(actions.checkAuth())
ReactDOM.render(
  <App store={store} persistor={persistor} />,
  document.getElementById("root")
);
