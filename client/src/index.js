import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/es/integration/react'
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App";

import {store,persistor} from "./redux/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HelmetProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();