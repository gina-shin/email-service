# rest-email-api
Welcome to rest-email-api! Now sending emails is as easy as sending an HTTP request.

This email API supports sending templated emails and non-templated emails through a POST body.

Great for sending password reset emails to users, account validation emails, or MFA confirmation emails.

## Installation
  ```
    npm install rest-email-api
  ```

## Here's an example!

### First, start the server like so:

```js
// index.js
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

### Step Two: Set up a folder to store the templates.

```sh
.
├── index.js
└── templates
    └── congrats
        ├── html.pug
```


### Step Three: Send your HTTP request!

Below is an example documented via Postman.

**For a templated email:**

* The request header should have your authorization secret key.

![Template Email Request Header](docs/postman_template_email_headers.png
)

* Set the template folder name that the service should use.

![Template Email Request Params](docs/postman_template_email_params.jpeg
)

* Finally, your POST body should look something like this:

![Template Email Request POST body](docs/postman_template_email_post_body.png
)

**For an ad-hoc/on the fly email made without a template:**

* The request header should have your authorization secret key.

![Ad-Hoc Email Request Header](docs/postman_adhoc_email_headers.png
)

* The only thing left to do is to set your POST body like so:

![Ad-Hoc Email Request POST body](docs/postman_adhoc_email_post_body.png
)




