var watsonCtrl = require('../watson/watsonController');
var twitterCtrl = require('../twitter/twitterController');
var userCtrl = require('../user/userController');
var Q = require('q');

var User = require('../user/userModel.js');
// var findUser = Q.nbind(User.findOne, User);

//check if user saved in db (check for persona data)
module.exports = {
  personaData: function(req, res) {
    //check if persona data exists
    //need to handle flow if data exists send back data if not continue w/ function
    var userId = req.query.id;
    var query = req.query;
    // var userId = 'HackReactor';
    //var screenName = res.body.id;
    //is this a default number of tweets?
    console.log('person we are looking for is ', userId);
    var count = 100;

    Q(User.findOne({userId: userId}).exec())
      .then(function(user) {
        // console.log('what we found was ', user);
        if(user) {
          var similarGroup = {};
          watsonCtrl.findSimilar(user)
            .then(function(returnedGroup){
              similarGroup = returnedGroup;
              console.log('similarGroup is ',similarGroup);
            var data = {
              personalityScores: user,
              similarGroup: similarGroup,
              dominantTrait: user.personaGroup
            };
            // console.log(user);
            res.send(data);
            });
        }
        else if(!user) {
          //get twitter data & send to watson
          twitterCtrl.getUserPosts(userId, count, function(posts){
            // console.log(posts);
            watsonCtrl.handleWatsonPersona(posts, query, res);
            //   res.send(data);
          });
    // twitterCtrl.getUserPosts(userId, count, function(posts){
      // console.log(posts);
      // res.send(posts);
            // watsonCtrl.handleWatsonPersona(posts, userId, res);

    }
  });


      //   }
      // })
      // .then(function(user) {
      //   res.send(user.persona);
      // })
      // .fail(function(error) {
      //   next(error);
      // });



    //upon completion of twitter retrieval pass data to Watson function
 }
};

// var req = {
//   body : {
//     userId : 'HackReactor'
//   }
// }

// module.exports.personaData(req);
//calls twitter function to get data
//use promises so when twitter data has completed

//retrieved tweets from db w/ user ID
//send tweets data into Watson
  //watson responds with data and make req to server
  //receive response from Watson and store in db