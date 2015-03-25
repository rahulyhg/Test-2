/**
 * MyModel
 *
 * @module      :: Model
 * @description :: Just to try mongoose
 */

module.exports = function(mongoose) {

  var schema = new mongoose.Schema({

    name: String

  })

  return mongoose.model('MyModel', schema)

}
