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
    blogger = js.blogger;
    if(blogger){
        blogger = "/" + blogger;
    }
    var title = page.essay.title;
    var topic = page.essay.topic;
    var sub_topic = page.essay.sub_topic;
    res.render('essay', {
        theme: "essay",
        title: title,
        topic: topic,
        sub_topic: sub_topic,
        blogger: blogger,
        page: page
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
