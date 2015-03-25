/**
 * We load mongoose
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Demo');

/**
 * We check if the connection is ok
 * If so we will continue to load everything ...
 */
var db = mongoose.connection;

console.log('Try to connect to MongoDB via Mongoose ...');

db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function callback() {

  console.log('Connected to MongoDB !');

});

/**
 * Let's make our Mongodb Schemas/Models
 */
module.exports = {

  MyModel: require('../models/MyModel.js')(mongoose)

}
