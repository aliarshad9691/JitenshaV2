var bookingsModel = require('../models/bookings');

var bookings = {};

// controller that handles bookings request
bookings.rent = function (req, res) {

	/*
	number		String	(16 chars credit card number)
	name		String	(Owner Name)
	expiration	String	(Expiration date in the following format: MM/YY)
	code		String	(3 chars security code)
	*/

	/*
		Todo1: Add code to validate data and place booking.
	*/

};


module.exports = bookings;