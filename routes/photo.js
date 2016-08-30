var express = require('express');
var path = require('path');
var page =require(path.join(__dirname, '../config/page.json'));
var articles =require(path.join(__dirname, '../config/articles.json'));
var titles =require(path.join(__dirname, '../config/titles.json'));
var router = express.Router();


var js = require(path.join(__dirname, '../config/blogger.json'));

/* GET essay page. */
router.get('/', function(req, res, next) {
    // get param from foreground
    var blogger = req.params.blogger;
    var preUrl = "";
    blogger = js.blogger;
    if(blogger){
        preUrl = "/" + blogger;
    }
    var title = page.photo.title;
    var topic = page.photo.topic;
    var sub_topic = page.photo.sub_topic;
    res.render('photo', {
        theme: "photo",
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        blogger: blogger,
        preUrl: preUrl,
        page: page
    });
});

module.exports = router;
