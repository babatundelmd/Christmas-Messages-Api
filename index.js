const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.json());

//Import routes
const route = require('./api/christmas-messages');
app.use('/api/christmas-messages', route);



const uri = process.env.DB_CONNECTION;
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(() => console.log('Database is connected🎨'));
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));