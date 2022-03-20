import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export interface PrivateRoutesProp {
  component: React.FC;
  path: string;
}

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = useAuth()?.authToken;

  if (isAuthenticated) return <Component />;
  return <Navigate to="/login" />;
};

export default PrivateRoute;
