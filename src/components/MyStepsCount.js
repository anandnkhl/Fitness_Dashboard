import React from "react";
import { useSubscription, gql } from "@apollo/client";
import "../styles/App.css"
import PieChart from './Graphs/PieChart'


const MyStepsCount = ({idToken}) => {
	const { loading, error, data } = useSubscription(
		gql`
		subscription{
			stepsCount{
				stepsToday
			}
		}`
	);

	if (loading) {
		return <div className="message">Loading...</div>;
	}
	if (error) {
		console.error(error);
		return <div>Error!</div>;
	}
	let stepsCountDisplay = "" , dataForPie = 0;
	if(data.stepsCount.length > 0){
		stepsCountDisplay = "Your Steps Count Today: "+data.stepsCount[0].stepsToday;
		dataForPie = data.stepsCount[0].stepsToday;
	}else{
		stepsCountDisplay = "No Step Count Data Present for today"
	}
	
    return(
        <div>
			<div className="message" style={{textAlign:"center"}}>
				{
					stepsCountDisplay
				}
			</div>
			<br/>
			<PieChart data={dataForPie}/>
        </div>
    )
};

export default MyStepsCount;



