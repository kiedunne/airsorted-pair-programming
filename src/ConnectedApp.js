import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./js/store/index";

import App from "./App";

export class ConnectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default ConnectedApp;
