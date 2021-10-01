const express = require('express');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());

// parse requests of content-type - application/json
app.use(express.urlencoded())

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (_req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./routes/note.routes')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});