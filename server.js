//bring in all the variables we need and set up for local as well as deployed
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// connection variables
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

//set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(routes);

// set up mongoose and connect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);

//start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});