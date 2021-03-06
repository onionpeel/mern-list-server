//import configuration variables
require('./config/config');
//import libraries for setting up the application server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//import the router module
const products = require('./routes/api/products');

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
// const {mongoose} = require('./db/mongoose');

// const path = require('path');

const app = express();
app.use(bodyParser.json());
//Set up the CORS before establish the routes
app.use(allowCrossDomain);

app.use('/api/products', products);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html '));
  });
};

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
