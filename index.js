const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' )
require( 'dotenv/config' );
const bodyParser = require( 'body-parser' );



app.use( bodyParser.json() );

//Import routes
const route = require( './api/christmas-messages' );
app.use( '/api/christmas-messages', route );

const uri = process.env.DB_CONNECTION;

mongoose.connect( uri, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log( 'Database is connected✅' ) );

// PORT
const port = process.env.PORT || 3000;
app.listen( port, () => console.log( `Listening on ${ port }` ) );