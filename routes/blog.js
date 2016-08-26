var express = require('express');
var path = require('path');
var url = require("url");            //解析GET请求  
var query = require("querystring");    //解析POST请求
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
            facebook: { label: pageJson.nav_right.facebook.label,  url: pageJson.nav_right.facebook.url },
            github: { label: pageJson.nav_right.github.label,  url: pageJson.nav_right.github.url },
            me: { label: pageJson.nav_right.me.label,  url: pageJson.nav_right.me.url },
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
