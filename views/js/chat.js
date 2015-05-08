"use strict"

// Declare our module
var myApp = angular.module( 'chatApp', [] );

// Create our chat controller
myApp.controller( 'chatCtrl', function( $scope)
{
	$scope.message = 'Messages from the server will appear here';

	// Try out some websocket stuff
	var connection = new WebSocket( 'ws://localhost:8080', [] );

	// Create a named reference to "this"
	var scope = $scope;

	// Set up a connection to our chat server
	connection.onopen = function()
	{
		// Send a "ping" to the server
		connection.send( "Ping!!" );
	}

	// Set up a method that will be called when data is received from the server
	connection.onmessage = function( e )
	{
		console.log( e.data );
		scope.message = e.data;
		scope.$apply();
	}
} );