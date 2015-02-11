var express = require('express');
var router = module.exports = express.Router();

// About
router.get('/about', function(req, res, next) {
  res.render('generic-text', { title: 'About' });
});

// Sign In
router.get('/signin', function(req, res, next) {
  res.render('signin-index', { title: 'Sign In' });
});

// /* Book Way GET home page */
// exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
// }; 