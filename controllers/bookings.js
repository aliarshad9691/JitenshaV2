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

	if(!req.body.number || !req.body.name || !req.body.expiration || !req.body.code)
	{
		res.status(400);
		res.send({status:'error',error:'Booking data is missing.'});	
	}

	var booking = bookingsModel.placeBooking(req.body);

	booking.then(function(dbBooking){
		//booking is successful, prepare and send response.
		var response = {};
		response.status = 'success';
		response.booking = dbBooking;
		res.send(response);	

	}, function(err){
		//booking is not successful, prepare and send response.
		var response = {};
		response.status = 'error';
		response.error = err;
		res.send(response);	
	});

};


module.exports = bookings;