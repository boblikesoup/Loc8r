module.exports = function(app){
 	// require('./main')(app);
 	app.use(require('../app_server/controllers/main'));
 	// require('./locations')(app)
	app.use(require('../app_server/controllers/locations'));
}; 