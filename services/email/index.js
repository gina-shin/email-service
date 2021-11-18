const nodemailer = require('nodemailer');

const { sendMailWithoutTemplate } = require('./sendMailWithoutTemplate');
const { sendMailWithTemplate } = require('./sendMailWithTemplate');

function setUpEmailService(config) {
  const transporter = nodemailer.createTransport(config.emailAuth);

  const sendMailAdHoc = (messageParameters, message) => (
    sendMailWithoutTemplate(transporter, messageParameters, message, config)
  );

  const sendTemplateEmail = (messageParameters, message) => (
    sendMailWithTemplate(transporter, messageParameters, message, config)
  );

  return {
    sendMailAdHoc,
    sendTemplateEmail,
  };
}

module.exports = setUpEmailService;
