var express = require('express');
var path = require('path');
var page =require(path.join(__dirname, '../config/page.json'));
var articles =require(path.join(__dirname, '../config/articles.json'));
var titles =require(path.join(__dirname, '../config/titles.json'));
var router = express.Router();

/* GET essay page. */
router.get('/', function(req, res, next) {
    page.photo.active = "active";
    var title = page.photo.title;
    var topic = page.photo.topic;
    var sub_topic = page.photo.sub_topic;
    res.render('photo', {
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        page: page
    });
    page.photo.active = "";
});

module.exports = router;
