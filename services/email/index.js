const nodemailer = require('nodemailer')

const { sendMailWithoutTemplate } = require('./sendMailWithoutTemplate')
const { sendMailWithTemplate } = require('./sendMailWithTemplate')

function setUpEmailService(config) {
  const transporter =
    nodemailer.createTransport({
      service: config.emailService,
      auth: {
        user: config.emailUser,
        pass: config.emailAppKey
      }
    })

  const sendMailAdHoc = (messageParameters, message) => {
    return sendMailWithoutTemplate(transporter, messageParameters, message, config)
  }

  const sendTemplateEmail = (messageParameters, message) => {
    return sendMailWithTemplate(transporter, messageParameters, message, config)
  }

  return {
    sendMailAdHoc,
    sendTemplateEmail
  };
}

module.exports = setUpEmailService;
