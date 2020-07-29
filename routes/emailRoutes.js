const emailRoutes = (router, config) => {
  const services = require('../services/email/index')(config);

  router.post('/ad-hoc-email/send', (req, res) => {

    const messageParameters = {
      to: req.body.to,
      subject: req.body.subject,
    }

    const message = {
      text: req.body.text || '',
      html: req.body.html || '',
      attachments: req.body.attachments || '',
    }

    return services.sendMailAdHoc(messageParameters, message)
      .catch((error) => {
        res
        .status(400)
        .json({
          status: 400,
          message: error.message,
          error: error
        })
        console.log('error: ', error)
      })
      .then((response) => {
        res
        .status(200)
        .json({
          status: 200,
          response: response,
        })
      })
  })

  router.post('/email-template/:template_name/send', (req, res) => {
    const messageParameters = {
      to: req.body.to,
      subject: req.body.subject,
      template: req.params.template_name,
    }

    const message = {
      text: req.body.text || '',
      html: req.body.html || '',
      attachments: req.body.attachments || '',
      templateVariables: req.body.templateVariables || {},
    }

    return services.sendTemplateEmail(messageParameters, message)
      .catch((error) => {
        res
        .status(400)
        .json({
          status: 400,
          message: error.message,
          error: error
        })
        console.log('error: ', error)
      })
      .then((response) => {
        res
        .status(200)
        .json({
          status: 200,
          response: response,
        })
      })
  })

  return router
}

module.exports = { emailRoutes }