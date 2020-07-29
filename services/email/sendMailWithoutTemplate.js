const sendMailWithoutTemplate = (transporter, messageParameters, message, config) => {
  return transporter.sendMail({
    from: config.emailUser,
    subject: messageParameters.subject,
    to: messageParameters.to,
    text: message.text,
    html: message.html,
  })
}

module.exports = { sendMailWithoutTemplate }