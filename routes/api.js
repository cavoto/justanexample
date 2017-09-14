var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/theUltimateAnswer', function(req, res, next) {
  res.json({ "is": 42 });
});

module.exports = router;
