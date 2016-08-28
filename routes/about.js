var express = require('express');
var path = require('path');
var page =require(path.join(__dirname, '../config/page.json'));
var router = express.Router();

var js = require(path.join(__dirname, '../config/blogger.json'));
/* GET blog page. */
router.get('/', function(req, res, next) {
    // get param from foreground
    var blogger = req.params.blogger;
    
    blogger = js.blogger;
    var target = "about";
    if(blogger){
        blogger = "/" + blogger;
    }
    var title = page.about.title;
    var topic = page.about.topic;
    var sub_topic = page.about.sub_topic;
    res.render('about', {
        theme: "about",
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        blogger: blogger,
        page: page
    });
});

module.exports = router;
