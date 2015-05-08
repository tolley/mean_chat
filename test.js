// Tolley
// 05/06/2015
// A test file for node.js server stuff

// Get the http server
var http = require( 'http' );

// Load the express framework and create our application object
var express = require( 'express' );

var app = express();

// Set up some simple routes to listen for
app.get( '/', function( req, res )
{
	res.send( 'Hello World!<br />Route= /' );
} );

app.get( '/test', function( req, res )
{
	res.send( 'Hello Test!<br />Route= /test' );
} );

var server = app.listen( 8000, function()
{
	console.log( 'server running!' );
} );
