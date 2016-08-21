var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
      title: 'JungleW-Home' ,
      topic: 'Jungle.W',
      sub_topic: 'Life is not smooth. <br> What we can do is to enjoy it.'
  });
});

module.exports = router;
