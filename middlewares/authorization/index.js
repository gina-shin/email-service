const authorize = (secretKey) => (req, res, next) => {
  if (req.headers.authorization !== secretKey) {
    res.status(403)
      .json({
        status: 403,
        message: 'Invalid credentials.',
      });
  } else {
    next();
  }
};

module.exports = { authorize };
