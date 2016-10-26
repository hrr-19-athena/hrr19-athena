var watsonCtrl = require('../watson/watsonController');
var twitterCtrl = require('../twitter/twitterController');
var userCtrl = require('../user/userController');
var Q = require('q');

var User = require('../user/userModel.js');
var findData = Q.nbind(User.findOne, User);

//check if user saved in db (check for persona data)
module.exports = {
  personaData: function(req, res) {
    //check if persona data exists
    //need to handle flow if data exists send back data if not continue w/ function
    var userId = req.query.id;
    // var userId = 'HackReactor';
    //var screenName = res.body.id;
    //is this a default number of tweets?
    var count = 100;

    twitterCtrl.getUserPosts(userId, count, function(posts){
      // console.log(posts);
      // res.send(posts);
            watsonCtrl.handleWatsonPersona(posts, userId, res);

    // findData({userId: userId})
    //   .then(function(user) {
    //     if(user.persona) {
    //       res.send(user.persona);
    //     }
    //     else if(!user.persona) {
    //       //get twitter data & send to watson
    //       twitterCtrl.getUserPosts(screenName, count, function(posts){
    //         console.log(posts);
    //         // watsonCtrl.handleWatsonPersona(posts, userId, function(data){
    //         //   res.send(data);
    //         // });
    });
  }


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