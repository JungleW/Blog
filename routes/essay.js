var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('essay', {
      title: 'JungleW-Essay' ,
      topic: '随笔',
      sub_topic: 'Life is not smooth. <br> What we can do is to enjoy it.'
  });
});

module.exports = router;
