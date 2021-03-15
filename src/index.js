import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: 'https://alejo-backend.herokuapp.com/'
});

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