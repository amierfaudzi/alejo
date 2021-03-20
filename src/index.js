import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://alejo-backend.herokuapp.com/'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: ''
    }
  }
})

const link = (authLink.concat(httpLink));

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);