var express = require('express');
var path = require('path');
var url = require("url");            //解析GET请求  
var query = require("querystring");    //解析POST请求
var page =require(path.join(__dirname, '../config/page.json'));
var topics = require(path.join(__dirname, '../config/topics.json'));
var router = express.Router();

var js = require(path.join(__dirname, '../config/blogger.json'));
var topics = require(path.join(__dirname, '../config/topics.json'));
/* GET blog page. */
router.get('/', function(req, res, next) {
    // get param from foreground
    var blogger = req.params.blogger;
    blogger = js.blogger;
    var preUrl = "";
    if(blogger){
        preUrl = "/" + blogger;
    }
    var title = page.blog.title;
    var topic = page.blog.topic;
    var sub_topic = page.blog.sub_topic;
    res.render('blog', {
        theme: "blog",
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        blogger: blogger,
        topics: topics,
        preUrl: preUrl,
        page: page
    });
});

/* GET all topic. */
router.get('/ajax/topics', function(req, res, next) {
    res.send({
        test: blogger,
        topics: topics
    });
});

module.exports = router;
