'use strict';

const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});
const uuidv4 = require('uuid/v4');

module.exports.sendEmail = (event, context, callback) => {
  console.log(`starting sendEmail: event: ${JSON.stringify(event)}, context: ${JSON.stringify(context)}`);
  let statusCode;
  let message;
  const data = {
    from: `${request.body.firstName} <${uuidv4()}@mattviteri.com>`,
    'h:Reply-To': request.body.email,
    to: process.env.SEND_TO,
    subject: `🎍 Let's build a website!`,
    text: request.body.message
  };
  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log(`Mailgun error: ${error}`);
      statusCode = 500;
      message = 'failure';
    }
    statusCode = 200;
    message = 'success';

    const response = {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ "message": message })
    };

    callback(null, response);
  });
};
