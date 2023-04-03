/* 
Do the tic tac toe tutorial
https://react.dev/learn/tutorial-tic-tac-toe

Read about open source licenses
https://opensource.org/licenses/
*/

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
