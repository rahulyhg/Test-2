/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var db = require('../services/db.js');

module.exports = {
  hi: function(req, res) {
    return res.send("Hi there!");
  },


  adduser: function(req, res) {

    var mymodel = db.MyModel({
      name: 'Test'
    });

    mymodel.save(function(err, mymodel) {




      if (err) return console.error(err); {
        console.log('mymodel saved.');
        return res.send("Hi there!");
      }


    });
  },

  getusers: function(req, res) {
    db.MyModel.find(function(err, mymodel) {

      if (err) return console.error(err);
      console.log(mymodel)

    });
  }


};
