var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.redis.get('redis_start', function(err, reply){
    console.log(reply);
  });

  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Page' });
});

module.exports = router;