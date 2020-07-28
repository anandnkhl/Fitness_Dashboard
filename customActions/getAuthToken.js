const request = require("request");
const { clientID, clientSecret, audience, grant } = require("./clientSecrets");

const options = { method: 'POST',
  url: 'https://dev--anandnkhl.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: `{"client_id": "${clientID}","client_secret":"${clientSecret}","audience":"${audience}","grant_type":"${grant}"}` 
};

let auth0Token = ''; 
request(options, function (error, response, body) {
    if (error) throw new Error(error);

    let bodyData = JSON.parse(body)
    auth0Token = bodyData.access_token;
//   console.log(auth0Token)
    console.log("Token Fetched");
});

module.exports = auth0Token; 