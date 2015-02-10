// Not using this page
var ctrl = require('../app_server/controllers/main');

// module.exports = function (app) {
//  app.get('/', ctrl.index);
// }; 

module.exports = function (app) {
  app.use(ctrl);
};