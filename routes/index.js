var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/newMsg', function (req, res, next) {
  let newMessage = { text: req.body.messageText, user: req.body.messageUser, added: new Date() };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
