const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

const fetch = require("node-fetch")

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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImluUUFuTTA1aG1IaW10bjlQc3hUSiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6Im5vcm1hbFVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbIm5vcm1hbFVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VybmFtZSI6Im5pa2hpbC5hbmFuZCJ9LCJnaXZlbl9uYW1lIjoiTmlraGlsICIsImZhbWlseV9uYW1lIjoiQW5hbmQiLCJuaWNrbmFtZSI6Im5pa2hpbC5hbmFuZCIsIm5hbWUiOiJOaWtoaWwgQW5hbmQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2pMOXM2aXdVVmlwZU1Ea19rRzhtU0dubHVlRDZUbEVjY0MyRFJjIiwibG9jYWxlIjoiZW4iLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0yN1QxNTo1OTowMi4wOTVaIiwiZW1haWwiOiJuaWtoaWwuYW5hbmRAa25vbHNrYXBlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi0tYW5hbmRua2hsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjQ2MzAxNzI3NDY5MjEzNjUxMiIsImF1ZCI6Ikk3VXJCNXNDUmRwdDF4OUcwd0Fpa2tqSUZIN0tiZFZyIiwiaWF0IjoxNTk1ODY1NTQ1LCJleHAiOjE1OTU5MDE1NDUsIm5vbmNlIjoiYTBaTmN6TllTbFJVYzAwNVJWZE1WbEpMVUZGaWQyRTVabUZuVVROS05WTnpNV2hYWWpnNWJXbEpVdz09In0.TSFr18BqPYPrgLmfW1H4_mJW_zoZk7MY45hziZANLADMJynMCTK4ZbxNmt7IqXlX-GA82UphNVdPM0xPgZ3CHcq6qI4Ftwy-wQOD-dh5tZMzScg5QVykh2j01HXqebXb-KIUZfy5L0itrRKFwoq-VDAmNwyf7noktb_nTItTD--dbjUbWsbaj8sdF5_lYuZFj4Geux6jjOYQOMPq3P47TrmWrnoTy3YbWPITmEEeVGUJ8tfMqQWxV1WHOE-gS3CsdASuo54ONmdsdpEqC24SOsrWZKlkk99mlGhmGQYbeu-RogBuRVXu5tnanaJebA80grzxinMIEaWNxxqL0eYVQQ`
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
