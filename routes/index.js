var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var blogPosts = { posts: [] };

  blogPosts.posts.push({
    id: "first-post",
    title: "My First Blog Post",
    author: {
      fName: "Jeff",
      lName: "Ammons",
      email: "jeffa@codecareeracademy.com"
    },
    content: "<h1>Hello, World!</h1>"
  });
  blogPosts.posts.push({
    id: "second-post",
    title: "My Second Blog Post",
    author: {
      fName: "Jeff",
      lName: "Ammons",
      email: "jeffa@codecareeracademy.com"
    },
    content: "<h1>Hello, Again World!</h1>"
  });

  res.render("index", blogPosts);

  // res.render('index', { title: 'My Blog',
  //   author: "Jeff",
  //   randomNumber: Math.random() });
});

module.exports = router;
