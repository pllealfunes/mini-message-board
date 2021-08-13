var express = require('express');
var newRouter = express.Router();

newRouter.get('/', function (req, res, next) {
  res.render('form', { formtitle: "New Message" });
});

module.exports = newRouter;
