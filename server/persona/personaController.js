var watsonCtrl = require('../watson/watsonController');
var twitterCtrl = require('../twitter/twitterController');
var userCtrl = require('../user/userController');
var Q = require('q');
var User = require('../user/userModel.js');

//check if user saved in db (check for persona data)
module.exports = {
  // Return the analyzed data
  personaData: function(req, res) {
    //check if persona data exists
    //need to handle flow if data exists send back data if not continue w/ function
    var userId = req.query.id;
    var query = req.query;
<<<<<<< HEAD

    // Default number of tweets returned
=======
>>>>>>> cleaned personaController.js
    var count = 100;

    Q(User.findOne({userId: userId}).exec())
      .then(function(user) {
<<<<<<< HEAD
        // Found this user
=======
>>>>>>> cleaned personaController.js
        if(user) {
          var similarGroup = {};
          watsonCtrl.findSimilar(user)
            .then(function(returnedGroup){
              similarGroup = returnedGroup;
            var data = {
              personalityScores: user,
              similarGroup: similarGroup,
              dominantTrait: user.personaGroup
            };
            res.send(data);
            });
        }
        else if(!user) {
          // User not in current Database
          //get twitter data & send to watson
          twitterCtrl.getUserPosts(userId, count, function(posts){
            watsonCtrl.handleWatsonPersona(posts, query, res);
          });
    }
  });

 },
 // Return your similar group
 getSimilar: function(req, res) {
  var userId = req.query.id;
  Q(User.findOne({userId:userId}).exec())
    .then(function(user) {
      console.log('found this user!');
      if (user) {
        watsonCtrl.findSimilar(user)
            .then(function(returnedGroup){
              res.send(returnedGroup);
            });
      }
    });
 }
<<<<<<< HEAD
};
=======

};
>>>>>>> cleaned personaController.js
