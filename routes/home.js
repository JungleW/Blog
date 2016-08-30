var express = require('express');
var path = require('path');
var page =require(path.join(__dirname, '../config/page.json'));
var router = express.Router();

var js = require(path.join(__dirname, '../config/blogger.json'));
/* GET home page. */
router.get('/', function(req, res, next) {
    // get param from foreground
    var blogger = req.params.blogger;
    blogger =  js.blogger;
    var preUrl = "";
    var target = "home";
    if(blogger){
        preUrl = "/" + blogger;
    }else {
        target = "home_index";
    }
    var title = page.home.title;
    var topic = page.home.topic;
    var sub_topic = page.home.sub_topic;
    res.render(target , {
        theme: "home",
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        blogger: blogger,
        preUrl: preUrl,
        page: page
    });
    blogger = "";
});

module.exports = router;
