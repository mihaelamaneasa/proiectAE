const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server/routes/web');
const apiRoutes = require('./server/routes/api');
const connection = require("./server/config/db");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static('node_modules'));

app.use('/', routes);
app.use('/api', apiRoutes);

const port = 3000;

// starting express server
app.listen(port, function() {
    console.log("Server is running at : http://localhost:" + port);
});