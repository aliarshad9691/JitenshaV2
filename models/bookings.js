var mongoose = require('mongoose');
var q = require('q');

//defining schema for Bookings table
var bookingSchema = new mongoose.Schema({
	  number: { type: String, required: true }, 
	  name: { type: String, required: true }, 
	  expiration: { type: String, required: true }, 
	  code: { type: String, required: true }, 
});

var Bookings = mongoose.model('bookings', bookingSchema);

var bookingsModel = {};

//function responsible for placing bookings
bookingsModel.placeBooking =function(bookingData){
	
	var results = q.defer();

	var newBooking = new Bookings({number: bookingData.number, name: bookingData.name, expiration: bookingData.expiration, code: bookingData.code});
	newBooking.save(function(err, dbBooking) {
		if(err) results.reject(err);
		results.resolve(dbBooking);
	});

	return results.promise;	
}

module.exports = bookingsModel;


