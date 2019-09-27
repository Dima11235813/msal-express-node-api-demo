var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users);
});

module.exports = router;

const users = {
  1: "Dima Larionov",
  2: "Read Only User",
}
