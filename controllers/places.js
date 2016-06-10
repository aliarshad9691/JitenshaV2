var placesModel = require('../models/places');

var places = {};

// controller that handles places list request
places.list = function (req, res) {

	var placesData = placesModel.get();

	placesData.then(function(dbPlaces){
		//places fetched from db, prepare and send response.
		var response = {};
		response.status = 'success';
		response.results = dbPlaces;
		res.send(response);	
		
	}, function(err){
		//error in fetching places from db, prepare and send response.
		var response = {};
		response.status = 'error';
		response.error = err;
		res.send(response);	
		
	});

};


module.exports = places;