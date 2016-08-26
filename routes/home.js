var express = require('express');
var path = require('path');
var page =require(path.join(__dirname, '../config/page.json'));
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    page.home.active = "active";
    var title = page.home.title;
    var topic = page.home.topic;
    var sub_topic = page.home.sub_topic;
    res.render('home', {
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        page: page
    });
    page.home.active = "";
});

module.exports = router;
