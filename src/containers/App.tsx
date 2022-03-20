import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { AuthContext } from "../context/authContext";
import AppRouter from "./appRouter";

import "./App.css";
import { FETCH_URL } from "../utils/contants";

function App() {
  const currentToken = localStorage.getItem("tokens");
  const token = currentToken ? JSON.parse(currentToken) : null;
  const [authToken, setAuthToken] = useState(token);
  const setToken = (token: string) => {
    localStorage.setItem("tokens", JSON.stringify(token));
    setAuthToken(token);
    window.location.reload();
  };
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const httpLink = createHttpLink({
    uri: `${FETCH_URL}/graphql`,
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ addTypename: false }),
    headers: { Authentication: `Bearer ${token}` },
  });
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <ApolloProvider client={client}>
        <AppRouter setToken={setToken} />
      </ApolloProvider>
    </AuthContext.Provider>
  );
}

export default App;
