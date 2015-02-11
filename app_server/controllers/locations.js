var express = require('express');
var router = module.exports = express.Router();

// Index - Home List
router.get('/', function(req, res, next) {
  res.render('locations-list', { title: 'Home' });
});

// Location Info
router.get('/location-info', function(req, res, next) {
  res.render('location-info', { title: 'Location Info' });
});

//Add Review
router.get('/location/review/new', function(req, res, next) {
  res.render('index', { title: 'Add Review' });
});