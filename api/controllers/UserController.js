/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */



module.exports = {
  hi: function(req, res) {
    return res.send("Hi there!");
  },


  adduser: function(req, res) {

    var mymodel = db.MyModel({
      name: 'Chintan'
    });

    mymodel.save(function(err, mymodel) {




      if (err) return console.error(err); {
        console.log('mymodel saved.');
        return res.send("Hi there!");
      }


    });
  },

  getusers: function(req, res) {
console.log(db.MyModel);
    db.MyModel.find({}, function(err, mymodel2) {

      if (err) {
        console.log("There is an error");
        console.error(err);
        res.json({
          error: "there is an error"
        });
      } else {
        res.json(mymodel2)
      }
      
    });
    
  }
};
