var express = require('express');
var path = require('path');
var pageJson =require(path.join(__dirname, '../config/page.json'));
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: pageJson.title.home,
        navbar: { 
            home: { label: pageJson.navbar.home.label, url: pageJson.navbar.home.url, class: "active" },
            blog: { label: pageJson.navbar.blog.label,  url: pageJson.navbar.blog.url , class: "" },
            essay: { label: pageJson.navbar.essay.label,  url: pageJson.navbar.essay.url , class: "" },
            about: { label: pageJson.navbar.about.label,  url: pageJson.navbar.about.url, class: "" },
        } ,     
        nav_right: { 
            facebook: { label: pageJson.nav_right.facebook.label,  url: pageJson.nav_right.facebook.url },
            github: { label: pageJson.nav_right.github.label,  url: pageJson.nav_right.github.url },
            me: { label: pageJson.nav_right.me.label,  url: pageJson.nav_right.me.url },
        },
        header:{
            topic: pageJson.header.home.topic,
            sub_topic: pageJson.header.home.sub_topic
        },
        footer:{
            copy_date: pageJson.footer.copy_date,
            link: {label: pageJson.footer.link.label , url: pageJson.footer.link.url }
        }
    });
});

module.exports = router;
