import React from "react";
import { Routes, Route } from "react-router-dom";

import BikeDetails from "./pages/bikeDetails";
import Home from "./pages/home";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bikes/:bikeId" element={<BikeDetails />} />
      {/* <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route> */}
    </Routes>
  );
}

export default App;
