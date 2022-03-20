import { createContext, useContext } from "react";

export const AuthContext = createContext<{
  authToken: any;
  setAuthToken: (token: string) => void;
} | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}
