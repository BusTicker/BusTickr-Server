var configure = function(utils) {

  var express = require('express');
  var router = express.Router();

  router.get('/',function(req,res) {res.send("PREDICTIONS");});
  return router;
}

module.exports.configure = configure;