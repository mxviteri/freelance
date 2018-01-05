'use strict';
//TODO: move this to a lambda -- moving to static s3 site instead of eb app

const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const uuidv4 = require('uuid/v4');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
// serve static assets
app.use(express.static(path.join(__dirname, 'lib')));

app.post('/send', (request, response) => {
    var data = {
      from: `${request.body.firstName} <${uuidv4()}@mattviteri.com>`,
      'h:Reply-To': request.body.email,
      to: process.env.SEND_TO,
      subject: `🎍 Let's build a website!`,
      text: request.body.message
    };
    mailgun.messages().send(data, function (error, body) {
      if (error) {
        console.log(`Mailgun error: ${error}`);
        response.status(500).send();
      }
      response.status(200).send();
    });
});

// Handles all routes so you do not get a not found error
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'lib', 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
