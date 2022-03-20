import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import your route components too
import App from "./containers/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
