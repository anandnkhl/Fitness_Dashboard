import React from 'react';
import jwt_decode from 'jwt-decode'
import Header from './Header';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { useAuth0 } from "./Auth/react-auth0-spa";
import MyInfoQuery from "./MyInfoQuery";


let Role = 'normalUser';
const createApolloClient = (authToken) => {
	return new ApolloClient({
		link: new HttpLink({
		uri: 'https://relaxed-pig-38.hasura.app/v1/graphql',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'X-Hasura-Role': `${Role}`
		}
		}),
		cache: new InMemoryCache(),
	});
};

function App({ idToken }) {
	const { loading,  logout } = useAuth0();
	
	const decoded = jwt_decode(idToken);
	if(decoded.email === 'anandnikhil91@gmail.com'){
		Role = 'admin';
	}


	if (loading || !idToken) {
		return <div>Loading...</div>;
	}
	const client = createApolloClient(idToken);
	console.log(idToken);
	return (
		<ApolloProvider client={client}>
		<div className = "overlay-message">
			<Header logoutHandler={logout} />
			<MyInfoQuery idToken={idToken}/>
		</div>
		</ApolloProvider>
	);
}

export default App;
