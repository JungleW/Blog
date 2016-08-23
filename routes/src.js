var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
      title: 'JungleW-Home' ,
      navbar: { 
          home: { url: "/home", class: "active" },
          blog: { url: "/blog" , class: "" },
          essay: { url: "/essay" , class: "" },
          about: { url: "/about", class: "" },
      } ,     
      nav_right: { 
          login: { url: "/login" },
          register: { url: "/register"} 
      },
      header:{
          topic: 'Jungle.W',
          sub_topic: 'Life is not smooth. <br> What we can do is to enjoy it.'
      },
      footer:{
          copy_date: '2014-2020',
          link: {label: "Jungle.W", url: "/home"}
      }
  });
});

module.exports = router;
