import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from './serviceWorker';
import Routes from './routes'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_CLIENTID

ReactDOM.render(
  <Auth0Provider
    domain = {domain}
    clientId = {clientId}
    redirectUri={"http://localhost:3000/#/FitnessDashboard"}
  >
    <Routes />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
