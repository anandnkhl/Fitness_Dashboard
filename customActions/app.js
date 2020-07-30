const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

const HASURA_OPERATION = `
mutation ($username: String! $incrementer: Int!){
  update_stepsCount(where: {username: {_eq: $username}}, _inc: {stepsToday: $incrementer}) {
    affected_rows
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables, userToken) => {
  const fetchResponse = await fetch(
    "https://relaxed-pig-38.hasura.app/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      }),
      headers: {
        Authorization: `Bearer ${userToken}`,
      }
    });
    
  const data = await fetchResponse.json();
  return data;
};
  

// Request Handler
app.post('/UpdateStepscountDerived', async (req, res) => {

  // get request input
  const { username, incrementer } = req.body;
  const userToken = req.headers.usertoken;

  // execute the Hasura operation
  const { data, errors } = await execute({ username , incrementer }, userToken);

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }

  // success
  return res.json({
    ...data.update_stepsCount
  })

});

app.listen(PORT);
