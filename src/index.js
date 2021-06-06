import { StrictMode } from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';

import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
