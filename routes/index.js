var express = require('express')();
var router = express;//express.Router();

// GET index page
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
