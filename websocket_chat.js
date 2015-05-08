// Create our app object
var express = require( 'express' );
var app = express();

// Tell our http server to render static files from the views directory
app.use( express.static( './views' ) );

// Set up the http server so that it listens on port 8000
app.listen( 8000, function()
{
	console.log( 'server running!' );
} );

// Include the websocket server
var ws = require( 'nodejs-websocket' );

// Initialize our websocket server
// var wsServer = new WebSocketServer( { httpServer: app } );
var wsServer = ws.createServer( function( conn )
{
	console.log( "New Connection" );

	conn.on( 'text', function( str )
	{
		console.log( 'Received ' + str );
		conn.sendText( str.toUpperCase() + '!!!' );
	} );

	conn.on( 'close', function( code, reason )
	{
		console.log( 'Conection closed, reason being:', reason, 'code = ', code );
	} )
} );

// Set our websocket server to listen on port 8080
wsServer.listen( 8080 );
