import React from "react";
import ReactDOM from "react-dom";
import registerIcons from "./fontLib";
import "./styles/fontStyles.css";

import store, { persistor } from "./store/store";
import App from "./App";

registerIcons();

// store.dispatch(actions.checkAuth())
ReactDOM.render(
  <App store={store} persistor={persistor} />,
  document.getElementById("root")
);
