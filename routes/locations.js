// Not using this page
var ctrl = require('../app_server/controllers/locations');

// module.exports = function (app) {
//  app.get('/', ctrl.index);
// }; 

module.exports = function (app) {
  app.use(ctrl);
};

// module.exports = function(app){ #B
//  app.get('/', ctrl.homelist); #C
//  app.get('/location', ctrl.locationInfo); #C
//  app.get('/location/review/new', ctrl.addReview); #C
// }; 