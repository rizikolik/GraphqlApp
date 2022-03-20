import React, { useState } from "react";

import { AuthContext } from "../context/authContext";
import AppRouter from "./appRouter";

import "./App.css";

function App() {
  const currentToken = localStorage.getItem("tokens");
  const token = currentToken ? JSON.parse(currentToken) : null;
  const [authToken, setAuthToken] = useState(token);
  const setToken = (token: string) => {
    localStorage.setItem("tokens", JSON.stringify(token));
    setAuthToken(token);
    window.location.reload();
  };
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <AppRouter setToken={setToken} />
    </AuthContext.Provider>
  );
}

export default App;
