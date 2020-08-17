const Email = require('email-templates')
const path = require('path')

const sendMailWithTemplate = (transporter, messageParameters, message, config) => {
  const templatePath = path.resolve(config.templateDirectory, messageParameters.template)

  const email = new Email({
    message: {
      from: config.emailUser
    },
    // uncomment below to send emails in development/test env:
    send: true,
    transport: transporter,
    preview: false,
})
  
  return email.send({
    template: templatePath,
    message: {
      to: messageParameters.to,
      subject: messageParameters.subject,
    },
    locals: message.templateVariables
  })
}

module.exports = { sendMailWithTemplate }