import React from "react";
import ReactDOM from "react-dom";

import PlayersContextProvider from "./context/PlayersContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <PlayersContextProvider>
    <App />
  </PlayersContextProvider>,
  rootElement
);
