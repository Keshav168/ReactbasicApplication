import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import CounterContext from "./CounterContext.js";
import LoginContext from "./LoginContext.js";

root.render(
  <CounterContext>
    <LoginContext>
      <App />
    </LoginContext>
  </CounterContext>
);
