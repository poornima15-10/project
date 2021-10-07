const express = require("express");
const cors = require("cors");
const db = require("./models");
const path = require('path')
const bodyParser = require("body-parser");

db.sequelize.sync();






/*
const mongodb=require("mongodb");

const MongoClient=require('mongodb').MongoClient;
const url= 'mongodb://localhost/';

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
     
    const myobj={notesname:"mongodb",notesid:"2", title:"mongodb",description:"mongodb related notes"}
    var dbo=db.db('testdb')
    dbo.collection("notes").insertOne(myobj,function(err,res){
      if(err) throw err;
      console.log(" 1 record is inserted")
    })

    dbo.collection("notes").find({}). toArray(function(err, result) {
      if (err) throw err;
      console.log("Data Frommongo is ",result);
    })
  });
*/


  
const app = express();
const PORT =6000;


// parse requests of content-type - application/json
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
require("./route/notes.routes")(app);
// simple route

// set port, listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});