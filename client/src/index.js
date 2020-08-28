import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from "react-router-dom";
import './index.css';
import { Auth0Provider } from "./components/Auth/react-auth0-spa";
import history from "./utils/history";
import * as serviceWorker from './serviceWorker';

require('dotenv').config()
console.log(process.env.REACT_APP_AUTH_DOMAIN);

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const mainRoutes = (
  <Router history={history}>
    <Route
      path="/"
      render={props => (
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH_DOMAIN}
          client_id={process.env.REACT_APP_AUTH_CLIENTID}
          redirect_uri={process.env.REACT_APP_AUTH_CALLBACKURL}
          onRedirectCallback={onRedirectCallback}
        />
      )}
    />
  </Router>
);

ReactDOM.render(mainRoutes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
