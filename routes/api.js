var users = require('../controllers/users');
var places = require('../controllers/places');
var bookings = require('../controllers/bookings');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){

	app.get('/api/v2', function(req, res) {
		res.json({ 'service' : 'じてんしゃ - Saitama Rent a bike' });
	});

	app.post('/api/v2/auth', users.auth); //public route
	app.post('/api/v2/register', users.register); //public route
	app.get('/api/v2/logout', helpers.isAuthenticated, users.logout); //secure route.
	app.post('/api/v2/rent', helpers.isAuthenticated, bookings.rent); //secure route.
	app.get('/api/v2/places', helpers.isAuthenticated, places.list); //secure route.
}


module.exports = routesAPI;