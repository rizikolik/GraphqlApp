import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import App from "./App";
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
