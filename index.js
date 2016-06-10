//requiring NPM modeles
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var app = express();

db.on('error', console.error);

//requiring local modeles
var configs = require('./config');
var routes = require('./routes/routes');
var helperFunctions = require('./helpers/helperFunctions');

// Uncomment the following lines to start logging requests to consoles.
// app.use(morgan('combined'));
// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

//connedting to mongoDB
mongoose.connect(configs.dbConnectionString);
//populating data if DB is not already populated.
helperFunctions.populateDb();

//Initilizing routes.
routes(app);


//Finally starting the listener
app.listen(configs.applicationPort, function () {
  console.log('Jitensha listening on port '+configs.applicationPort+'!');
});


/*
Todos:
1) controllers/bookings.js 		Todo: Add code to validate data and place booking.
2) models/users.js 				Todo: Add code to register new user.
3) helpers/helperFunctions.js 	Todo: Add code to populate DB if its already not been populated.
4) helpers/helperFunctions.js	Todo: Fix the exception from this file.
5) routes/routes.js 			Todo: Add accessToken authentication to routes.
