var express = require('express');
var path = require('path');
var url = require("url");            //解析GET请求  
var query = require("querystring");    //解析POST请求
var page =require(path.join(__dirname, '../config/page.json'));
var articles =require(path.join(__dirname, '../config/articles.json'));
var titles =require(path.join(__dirname, '../config/titles.json'));
var router = express.Router();

var js = require(path.join(__dirname, '../config/blogger.json'));
/* GET blog page. */
router.get('/:topic', function(req, res, next) {
    var blogger = req.params.blogger;
    blogger = js.blogger;
    var preUrl = "";
    if(blogger){
        preUrl = "/" + blogger;
    }
    var articleId = req.query.articleId || 1;
    var topic = req.params.topic;
    if(topic == "undefined" || topic == ''){
        topic = "web";
    }
    var title = topic;    
    res.render('blog_topic', {
        theme: "",
        title: title,
        topic: topic,
        page: page,
        blogger: blogger,
        preUrl: preUrl,
        article: articles[0]
    });
});
/* GET article. */
router.get('/:topic/ajax/article', function(req, res, next) {
    var json = articles;
    var articleId = req.query.articleId;
    if(articleId == "undefined" || articleId == ''){
        articleId = "0";
    }
    res.send(json[articleId]);
});
/* GET article. */
router.get('/:topic/ajax/titles', function(req, res, next) {
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
