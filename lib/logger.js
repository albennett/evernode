'use strict';
const Log = require('../models/log');

module.exports = (req, res, next) => {
  //log request to db
  Log.create({
    userAgent: req.headers['user-agent'],
    route: req.url,
    verb: req.method
  }, next);
}
