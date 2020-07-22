import React, { useState, Fragment } from "react";
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import "../styles/App.css"

const GET_MY_INFO = gql`
query{
    users{
        emailID,
        username,
        name
    }
}`;

const MyInfoQuery = () => {
    const { loading, error, data } = useQuery(GET_MY_INFO);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      console.error(error);
      return <div>Error!</div>;
    }
    return (
      <div>
        {data.users.map((i, key) => {
          return (
            <div key={key} className="message">
              {i.emailID +
                " , " +
                i.username +
                " ," +
                i.name}
            </div>
          );})
        }
      </div>
    )
};

export default MyInfoQuery;