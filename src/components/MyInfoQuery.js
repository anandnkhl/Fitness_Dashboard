import React from "react";
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import LineChart from './Graphs/LineChart'
import MyWaterConsumption from './MyWaterConsumption'
import "../styles/App.css"

const GET_MY_INFO = gql`
query{
	users{
		emailID,
		username,
		name
	}
}`;

const MyInfoQuery = ({idToken}) => {
	const { loading, error, data } = useQuery(GET_MY_INFO);

	if (loading) {
		return <div className="message">Loading...</div>;
	}
	if (error) {
		console.error(error);
		return <div>Error!</div>;
	}
	//For Admin
	if( data.users.length > 1 ){
		return(
			<div>
			<div className="message">Welcome Admin!</div><br/>
			<div className="message">Here's the list of all users so far...</div><br/><br/>
			<table className="table">
				<tr><th>Name</th><th>Username</th><th>EmailID</th></tr>
				{data.users.map((i, key) => {
					return (
						<tr key={key} >
							<td>{i.name}</td>
							<td>{i.username}</td>
							<td>{i.emailID}</td>
						</tr>
						
				);})
				}
			</table>
			<LineChart />
			</div>
		)
	}
	//For normalUser
	if( data.users.length <= 1 ){
		return(
			<div>
				<div className="message">Welcome {data.users[0].name} ({data.users[0].emailID})</div><br/>
				<div className="message">Here are your Stats...  </div><br/><br/>
				<MyWaterConsumption idToken={idToken}/>
			</div>
		)
	}
};

export default MyInfoQuery;