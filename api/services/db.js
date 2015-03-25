var mongoose = require('mongoose');
var glob = require("glob");
var path = require('path');
 
mongoose.connect('mongodb://localhost/Demo');
 
/**

* We check if the connection is ok

* If so we will continue to load everything ...

*/
 
var db = mongoose.connection;
var models = {};
 
console.log('Try to connect to MongoDB via Mongoose ...');
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function callback() {
	console.log('Connected to MongoDB !');
  	// get all model in /api/models
	iterateModels();
});
 
 
 
/**

* Let's make our Mongodb Schemas/Models

*/
 
function iterateModels()
{
console.log('iterate model');
	glob("api/models/*.js", {}, function (err, files){
		console.log(files);
		for (var i = files.length - 1; i >= 0; i--) {
			var basename = path.basename(files[i], '.js');
			console.log(process.cwd()+ '/' + files[i]);
			var tmp_schema = require(process.cwd()+ '/' + files[i]);
			models[basename] = createMongooseModel(tmp_schema, basename);
		};
	});
}
 
function createMongooseModel(schema_description, model_name) {
	 var schema = new mongoose.Schema(schema_description.attributes);
	 if (schema_description.methods)
	 	schema.methods = schema_description.methods;
	 if (schema_description.statics)
	 	schema.statics = schema_description.statics;
	 if (schema_description.beforeSave)
	 	schema.pre('save', function (next){
	 		schema_description.beforeSave(this, next);
	 	});
	return mongoose.model(model_name, schema)
 
};
 
// Expose Mixed type and ObjectId type for Models
models.Mixed = mongoose.Schema.Types.Mixed;
models.ObjectId = mongoose.Schema.Types.ObjectId;
// Expose all models loaded
module.exports = models;
 