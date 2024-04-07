import React from "react";
import ReactDOM from "react-dom/client";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import HeadlessDemo from "./App";

import "./index.css";
import "./css/flags.css";
import Home from "./components/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <HeadlessDemo />
      <Home />
    </PrimeReactProvider>
  </React.StrictMode>
);
