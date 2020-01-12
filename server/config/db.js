const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/mean_db');

module.exports = connection;