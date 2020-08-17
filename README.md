# rest-email-api
Welcome to rest-email-api! Now sending emails is as easy as sending an HTTP request.

This email API supports sending templated emails and non-templated emails through a POST body.

Great for sending password reset emails to users, account validation emails, or MFA confirmation emails.

## Installation

    npm install rest-email-api

## Here's an example use case!

```
const emailService = require('rest-email-api')
const path = require('path')

emailService.runEmailApi({
  port: 3000,
  secretKey: 'ANY_SECRET_KEY', // Any super long, random, and hard to guess key
  emailUser: 'email@youremail.com',
  emailAuth: {
    // See nodemailer create transporter method at nodemailer.com/about/#/example for more information.
    service: 'gmail',
    auth: {
      user: 'email@youremail.com',
      pass: 'your_password'
    }
  },
  templateDirectory: path.join(__dirname, './templates')
  })
```