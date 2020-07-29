require('dotenv').config()

const config = {
  emailService: 'gmail',
  emailUser: 'ginxshin@gmail.com',
  emailAppKey: process.env.EMAIL_APP_KEY,
  secretKey: process.env.SECRET_KEY,
}

module.exports = { config }