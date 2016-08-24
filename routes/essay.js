var express = require('express');
var path = require('path');
var pageJson =require(path.join(__dirname, '../config/page.json'));
var articles =require(path.join(__dirname, '../config/articles.json'));
var titles =require(path.join(__dirname, '../config/titles.json'));
var router = express.Router();

/* GET essay page. */
router.get('/', function(req, res, next) {
    var articleId = req.query.articleId || 1;
    res.render('essay', {
        title: pageJson.title.essay,
        navbar: { 
            home: { label: pageJson.navbar.home.label, url: pageJson.navbar.home.url, class: "" },
            blog: { label: pageJson.navbar.blog.label,  url: pageJson.navbar.blog.url , class: "" },
            essay: { label: pageJson.navbar.essay.label,  url: pageJson.navbar.essay.url , class: "active" },
            about: { label: pageJson.navbar.about.label,  url: pageJson.navbar.about.url, class: "" },
        } ,     
        nav_right: { 
            login: { label: pageJson.nav_right.login.label,  url: pageJson.nav_right.login.url },
            register: { label: pageJson.nav_right.register.label,  url: pageJson.nav_right.register.url },
        },
        header:{
            topic: pageJson.header.essay.topic,
            sub_topic: pageJson.header.essay.sub_topic
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
    var articleId = req.query.articleId;
    if(articleId == "undefined" || articleId == ''){
        articleId = "0";
    }
    res.send(json[articleId]);
});
/* GET article. */
router.get('/ajax/titles', function(req, res, next) {
    var flag = false;
    var searchKey = req.query.searchKey;
    if(searchKey=="") flag = true;
    var page = parseInt(req.query.page);
    var per_page = parseInt(req.query.per_page);
    var startIndex = page * per_page;
    var retTitles = [];
    var length = titles.length;  
    var len = 0;
    for(var i=startIndex; len <per_page && i<length; i++){
        if(flag || titles[i].name.match(searchKey)){
            retTitles.push(titles[i]);
            len++;
        }
    }
    res.send({
        searchkey: searchKey,
        titles: retTitles
    });
});

module.exports = router;
