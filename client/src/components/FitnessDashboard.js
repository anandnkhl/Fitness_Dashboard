import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import { useAuth0 } from "@auth0/auth0-react";

const client = new  ApolloClient({
    uri: 'https://relaxed-pig-38.hasura.app/v1/graphql'
});



function FitnessDashboard({ idToken }) {
    const { logout, user, isAuthenticated } = useAuth0();
    const GET_USER_QUERY = gql`
    query MyQuery {
        users(where: {username: {_eq: "anandnkhl"}}) {
        emailID
        }
    }`;
    return (
        isAuthenticated && (
            
                <div className="App">
                <header className="App-header">
                    <ApolloProvider client={client}>
                        <Query query={GET_USER_QUERY}>
                            {
                                ({loading, error, data}) => {
                                    if(loading) return <h4>Loading ...</h4>
                                    if(error) {console.log(error); return <h4>error</h4>}
                                    return(<h2>{data}</h2>)
                                }
                            }
                        </Query>
                    </ApolloProvider>
                    <button onClick={() => logout()}>Log Out</button>
                </header>
                </div>
        )
    )
}
  
  export default FitnessDashboard;