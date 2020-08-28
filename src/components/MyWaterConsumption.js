import React from "react";
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import BarGraph from './Graphs/BarGraph'
import MyStepsCount from './MyStepsCount'
import "../styles/App.css"
import SubscriptionClient from "./SubscriptionClient";

const GET_WATER_CONSUMPTION = gql`
query{
    waterConsumption{
        week,
        waterLtr
    }
}`;

const MyWaterConsumption = ({idToken}) => {
	const { loading, error, data } = useQuery(GET_WATER_CONSUMPTION);

	if (loading) {
		return <div className="message">Loading...</div>;
	}
	if (error) {
		console.error(error);
		return <div>Error!</div>;
	}
	
	//For normalUser
    return(
        <div>
        <table className="message">
            <tr><th>Week</th><th>Amount of Water</th></tr>
            {data.waterConsumption.map((i, key) => {
                return (
                    <tr key={key} className="message">
                        <td>{i.week}</td>
                        <td>{i.waterLtr} ltr.</td>
                    </tr>
            );})
            }
        </table>
        <br/>
        <div style={{float:"left", marginLeft:"20"}}>
            <BarGraph data = {data.waterConsumption}/>
        </div>
        <div >
            <SubscriptionClient idToken={idToken}/>
        </div>
        </div>
    )
};

export default MyWaterConsumption;