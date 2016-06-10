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

	/*
		Todo: Add accessToken authentication to the following routes.
	*/
	app.get('/api/v2/logout', users.logout); //secure route.
	app.post('/api/v2/rent',  bookings.rent); //secure route.
	app.get('/api/v2/places', places.list); //secure route.
}


module.exports = routesAPI;