var express = require('express');
var router = express.Router();

/* GET lambdas listing. */
router.get('/', function(req, res, next) {
  res.send('respond with the list of Lambda functions created in the AWS account across regions');
});

router.get('/search', function(req, res, next) {
  res.send('search for Lambda functions using query params');
});

module.exports = router;
