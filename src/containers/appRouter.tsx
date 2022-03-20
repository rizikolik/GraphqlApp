import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import BikeDetails from "../pages/bikeDetails";
import Home from "../pages/home";

import Login from "../pages/login";
import Signup from "../pages/signup";
import PrivateRoute from "./privateRoute";

interface AppRouterPropsType {
  setToken: (token: string) => void;
}
const AppRouter: FC<AppRouterPropsType> = ({ setToken }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/signup" element={<Signup setToken={setToken} />} />
      <Route path="/" element={<PrivateRoute component={Home} />} />
      <Route path="/bikes" element={<PrivateRoute component={BikeDetails} />} />
      <Route
        path="/bikes/:bikeId"
        element={<PrivateRoute component={BikeDetails} />}
      />
    </Routes>
  );
};
export default AppRouter;
