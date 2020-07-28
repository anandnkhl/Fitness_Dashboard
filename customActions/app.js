const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const bearerToken = require("./getAuthToken")

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
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "https://relaxed-pig-38.hasura.app/v1/graphql",
    {
      method: 'POST',
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      }),
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      }
    });
    
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
  

// Request Handler
app.post('/UpdateStepscountDerived', async (req, res) => {

  // get request input
  const { username, incrementer } = req.body;

  // run some business logic

  // execute the Hasura operation
  const { data, errors } = await execute({ username , incrementer });

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
