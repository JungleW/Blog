var express = require('express');
var path = require('path');
var page =require(path.join(__dirname, '../config/page.json'));
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
    page.about.active = "active";
    var title = page.about.title;
    var topic = page.about.topic;
    var sub_topic = page.about.sub_topic;
    res.render('about', {
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        page: page
    });
    page.about.active = "";
});

module.exports = router;
