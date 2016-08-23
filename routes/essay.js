var express = require('express');
var path = require('path');
var pageJson =require(path.join(__dirname, '../config/page.json'));
var router = express.Router();

/* GET blog page. */
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
        article: {
            title: "Hi, everybody!",
            updateTime: "08-01-2016",
            topic: "杂七杂八",
            abstract: "简单介绍下个人主页",
            content: '<p><strong>C4Nstudio.com</strong>是笔者C4N独立开发的个人主页及博客，使用包括<a href="https://facebook.github.io/react/">React</a><a href="https://nodejs.org/en/">Node.js</a>、<a href="http://foundation.zurb.com/">Foundation</a>和<a href="https://webpack.github.io/">Webpack</a>等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：</p><p>Hope you enjoy.</p>'

        }
    });
});
/* GET article. */
router.get('/ajax/article', function(req, res, next) {
    var json = [{
            title: "Hi, every1!",
            updateTime: "08-01-2016",
            topic: "杂七杂八",
            abstract: "简单介绍下个人主页",
            content: '<p><strong>C4Nstudio.com</strong>是笔者C4N独立开发的个人主页及博客，使用包括<a href="https://facebook.github.io/react/">React</a><a href="https://nodejs.org/en/">Node.js</a>、<a href="http://foundation.zurb.com/">Foundation</a>和<a href="https://webpack.github.io/">Webpack</a>等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：</p><p>Hope you enjoy.</p>'

        },
        {
            title: "Hi, every2!",
            updateTime: "08-01-2016",
            topic: "杂七杂八",
            abstract: "简单介绍下个人主页",
            content: '<p><strong>C4Nstudio.com</strong>是笔者C4N独立开发的个人主页及博客，使用包括<a href="https://facebook.github.io/react/">React</a><a href="https://nodejs.org/en/">Node.js</a>、<a href="http://foundation.zurb.com/">Foundation</a>和<a href="https://webpack.github.io/">Webpack</a>等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：</p><p>Hope you enjoy.</p>'

        },
            {
            title: "Hi, every3!",
            updateTime: "08-01-2016",
            topic: "杂七杂八",
            abstract: "简单介绍下个人主页",
            content: '<p><strong>C4Nstudio.com</strong>是笔者C4N独立开发的个人主页及博客，使用包括<a href="https://facebook.github.io/react/">React</a><a href="https://nodejs.org/en/">Node.js</a>、<a href="http://foundation.zurb.com/">Foundation</a>和<a href="https://webpack.github.io/">Webpack</a>等前后端框架、类库和工具，希望不仅能在搭建网站的过程中学以致用，掌握最新前后端知识，还能在推送的博文中向读者介绍个人了解到的技术信息，共同分享，不断进步。博客包括以下几个主要板块：等前后端框架、类库和工具，希望不仅能在搭'

        }];
    var articleId = req.query.articleId || 1;
    res.send(json[articleId]);
});
/* GET article. */
router.get('/ajax/titles', function(req, res, next) {
    var articleId = req.query.articleId || 1;
    res.send([
                {name: "文章1", articleId: 1 },
                {name: "文章2", articleId: 2 },
                {name: "文章3", articleId: 3 },
                {name: "文章4", articleId: 4 },
                {name: "文章5", articleId: 5 },
                {name: "文章6", articleId: 6 },
                {name: "文章7", articleId: 7 },
                {name: "文章3", articleId: 3 },
                {name: "文章4", articleId: 4 },
                {name: "文章5", articleId: 5 },
                {name: "文章6", articleId: 6 },
                {name: "文章7", articleId: 7 }
            ]
             
    );
});

module.exports = router;