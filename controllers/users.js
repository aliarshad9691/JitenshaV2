var userModel = require('../models/users');

var users = {};

// controller that handles user login request
users.auth = function (req, res) {

	if(!req.body.username || !req.body.password)
	{
		res.status(400);
		res.send({status:'error',error:'Username or password is missing.'});	
	}
	
	var user = userModel.authUser(req.body.username, req.body.password);

	user.then(function(dbuser){

		var response = {};
		response.status = 'success';
		response.accessToken = dbuser.activeSession;
		response.username = dbuser.username;
		res.send(response);	
	}, function(err){

		var response = {};
		response.status = 'error';
		response.error = err;
		res.send(response);	
		
	});

};

// controller that handles user registration
users.register = function (req, res) {

	if(!req.body.username || !req.body.password)
	{
		res.status(400);
		res.send({status:'error',error:'Username or password is missing.'});	
	}

	var user = userModel.registerUser(req.body.username, req.body.password);

	user.then(function(dbuser){
		
		var response = {};
		response.status = 'success';
		response.accessToken = dbuser.activeSession;
		response.username = dbuser.username;
		res.send(response);	
		
	}, function(err){
		var response = {};
		response.status = 'error';
		response.error = err;
		res.send(response);	
	});
	
};

// controller that handles user logout request
users.logout = function (req, res) {

	var sessionId = req.query.accessToken;

	var user = userModel.logout(sessionId);

	res.send({status:'success'});	
	

};


module.exports = users;