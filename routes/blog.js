var express = require('express');
var path = require('path');
var pageJson =require(path.join(__dirname, '../config/page.json'));
var articles =require(path.join(__dirname, '../config/articles.json'));
var titles =require(path.join(__dirname, '../config/titles.json'));
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
    var articleId = req.query.articleId || 1;
    res.render('blog', {
        title: pageJson.title.blog,
        navbar: { 
            home: { label: pageJson.navbar.home.label, url: pageJson.navbar.home.url, class: "" },
            blog: { label: pageJson.navbar.blog.label,  url: pageJson.navbar.blog.url , class: "active" },
            essay: { label: pageJson.navbar.essay.label,  url: pageJson.navbar.essay.url , class: "" },
            about: { label: pageJson.navbar.about.label,  url: pageJson.navbar.about.url, class: "" },
        } ,     
        nav_right: { 
            login: { label: pageJson.nav_right.login.label,  url: pageJson.nav_right.login.url },
            register: { label: pageJson.nav_right.register.label,  url: pageJson.nav_right.register.url },
        },
        header:{
            topic: pageJson.header.blog.topic,
            sub_topic: pageJson.header.blog.sub_topic
        },
        footer:{
            copy_date: pageJson.footer.copy_date,
            link: {label: pageJson.footer.link.label , url: pageJson.footer.link.url }
        },
        article: articles[0]
    });
});
/* GET article. */
router.get('/ajax/article', function(req, res, next) {
    var json = articles;
    var articleId = req.query.articleId || 1;
    res.send(json[articleId]);
});
/* GET article. */
router.get('/ajax/titles', function(req, res, next) {
    var articleId = req.query.articleId || 1;
    res.send(titles);
});

module.exports = router;
