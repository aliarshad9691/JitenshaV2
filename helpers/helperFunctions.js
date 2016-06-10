var Places = require('../models/places');

var helpers = {};

//Function that checks if the request is authenticated or not.
helpers.isAuthenticated = function(req, res, next){

	if(!req.query.accessToken){
		res.status(401);
		res.send({status:'error',error:'Not Authorized.'});
	}
	else{
		var user = Users.getBySessionId(req.query.accessToken);	
		user.then(function(dbuser){
			if(dbuser){
				next();
			}else{
				res.status(401);
				res.send({status:'error',error:'Not Authorized.'});		
			}	
		});
		
	}
}

//Function to populate data in DB if DB is empty.
helpers.populateDb = function(){

	/*
		Todo: Add code to populate DB if its already not been populated.
	*/
}

module.exports = helpers;

/*
	Todo: Fix the exception from this file.
*/