
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import Signup from './pages/Signup';


import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

import { Container } from './components/styles/Container.styled'


import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
          <Container>
              <ApolloProvider client={client}>
                <Router>
                    <Header />
                      <Routes>
                          <Route path="/" element={<Main />} />
                          <Route path="/signup" element={<Signup />} />
                      </Routes>

                    <Footer />                      
                    <button onClick={themeToggler}>Switch Theme</button>
              </Router>
            </ApolloProvider>
          </Container>

    </ThemeProvider>
  );
}

export default App;