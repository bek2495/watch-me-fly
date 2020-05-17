// server.js
const express = require('express');
const path = require('path');

const app = express();


// Run the app by serving the static files
// in the dist directory
app.use(express.static('./../dist/'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: './../dist/watch-me-fly/'})
    //res.sendFile(path.join(__dirname + './../dist/watch-me-fly/index.html'));
  });

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
