import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import theme from "./@ui/theme";
import { Routes } from "./router/Routes";
import ErrorBoundary from "./components/ErrorBoundary";


export default function App({ store, persistor }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.Suspense>
          <BrowserRouter>
            <LastLocationProvider>
              <ThemeProvider theme={theme}>
                <ErrorBoundary>
                  <Routes />
                </ErrorBoundary>
              </ThemeProvider>
            </LastLocationProvider>
          </BrowserRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}
