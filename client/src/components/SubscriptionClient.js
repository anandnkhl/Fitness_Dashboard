import React, { useEffect, Fragment, useState } from "react";
import "../styles/App.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";
import MyStepsCount from "./MyStepsCount"

const createApolloClient = (authToken) => {
    return new ApolloClient({
     link: new WebSocketLink({
       uri: 'wss://relaxed-pig-38.hasura.app/v1/graphql',
       options: {
         reconnect: true,
         connectionParams: {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
         }
       }
      }),
      cache: new InMemoryCache(),
    });
};


const SubscriptionClient = ({ idToken }) => {
  const client = createApolloClient(idToken);
return (
    <ApolloProvider client={client}>
        <div className = "overlay-message">
          <MyStepsCount />
        </div>
	</ApolloProvider>
);
};


export default SubscriptionClient;