var express = require('express');
var userService=require("../services/user_services.js");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/loginuser",userService.login);
module.exports = router;
