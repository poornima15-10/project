const express = require("express");
const cors = require("cors");
const db = require("./models");
const path = require('path')
db.sequelize.sync();

const app = express();


// parse requests of content-type - application/json
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./route/turorial.routes")(app);
// simple route

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});