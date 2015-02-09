var express = require('express');
var router = module.exports = express.Router();

/* New Way GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loc8r' });
});

// /* Book Way GET home page */
// exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
// }; 