var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var keys = require('../api-services.js');
var UserModel = require('../user/userModel.js');
var Q = require('q');
// Promisify mongoose methods with the `q` promise library
var findUser = Q.nbind(UserModel.findOne, UserModel);
var createUser = Q.nbind(UserModel.create, UserModel);
var findAll = Q.nbind(UserModel.find, UserModel);
var userController = require('../user/userController.js');

var _ = require('underscore');
require('dotenv').config();

//var objectToJson = require("object-to-json");
// var jsonPerson = objectToJSON(person);
//bluemix is for if we want to generate keys dynamically, we are not currently - vi
// var bluemix = require('../node_modules/bluemix/lib/bluemix.js');

//CREDENTIALS IF WE NEED TO GENERATE ON THE FLY - still buggy - Vi
// var credentials = extend({
//   version:'v2',
//   username: username,
//   password: password
// }), bluemix.getServiceCreds('personality_insights'));

// // Create the service wrapper
// var personality_insights = watson.personality_insights(credentials);

//CREDENTIALS SECTION - Vi
module.exports.personality_insights = new PersonalityInsightsV3({
  username: keys.watsonPersonality.username,
  password: keys.watsonPersonality.password,
  version_date: '2016-10-20'
});

//TEMPORARY WATSON FOR FAKE HARD-CODED DATA - Vi
// module.exports.params = {
//   content_items: require('../profile.json').contentItems,
//   consumption_preferences: true,
//   raw_scores: true,
//   headers: {
//     'accept-language': 'en',
//     'accept': 'application/json'
//   }
// };

module.exports.handleWatsonPersona = function(twitterFeed, userId, res){
  id = userId || 'HackReactor';
  var regex = /[a-zA-Z0-9^/:" "{},]/g;
  var results = twitterFeed.match(regex);
  var contentArray = [results.join('')];
  // console.log('Twitter Content Loading into Watson')
  //console.log('ContentArray: ', contentArray);
  // console.log(results.join(''));
  var params = {
    content_items: contentArray,
    consumption_preferences: true,
    raw_scores: true,
    headers: {
      'accept-language': 'en',
      'accept': 'application/json'
    }
  };
;
  module.exports.personality_insights.profile(params, function(err, profile) {
    if (err)
      console.log(err);
    else
      // res.json(profile.personality);
      module.exports.massageAndSave(profile, id, res);
  });
};

module.exports.findSimilar = function(profile) {
  console.log('got into findSimialr!');
  //var group
  // console.log('profile.persona is ', profile.persona);
  // console.log('profile.persona[0].percentile is ', profile.persona[0].percentile);
  var curUserId = profile.userId;
  var profile = profile.persona;
  var similarGroup = [];
  //create trait summary for Cur
  var curTS = [];
  for (var i = 0; i< profile.length; i++) {
    curTS.push(0.5 - profile[i].percentile);
  }
  console.log('This person\'s trait summary is ', curTS);
  //find all people in database,
 return Q(UserModel.find({}).exec())
    .then(function(users) {
      // console.log('all users in db right now are ', users);
      // console.log('users length is ', users.length);
    //create trait summary for each user in database
      for (var j = 0; j<users.length; j++) {
        var userTS = [];
        var curUser = users[j].persona;
        // console.log('each user is ', curUser);
        for(var k = 0; k<curUser.length; k++) {
          userTS.push(0.5 - curUser[k].percentile);
        }
        console.log('individual userTS is ', userTS);
    //calculate gap for each
      //if gap < 5, add person to group
        var gap = 0;
        for(var l = 0; l<userTS.length; l++) {
          gap += (curTS[l] - userTS[l]);
        }
        console.log('gap between this cur user and other user is ', gap);
        console.log('other user', users[j].userId);
        console.log('this user', curUserId);
        console.log('math abs of gap ', Math.abs(gap));

        if(Math.abs(gap) < 0.03 && users[j].userId !== curUserId){
          similarGroup.push(users[j]);
          console.log(similarGroup);
        }
      }
  //return group
    console.log('similarGroup from watsonController ', similarGroup);
    return similarGroup;
    });
};

module.exports.massageAndSave = function(profile, query, res){
  console.log("GENERATING NEW ANALYSIS!!!!");
  var similarGroup = module.exports.findSimilarGroup(profile);
  // OLD FIND GROUP - DOMINANT TRAIT
  var findGroup = function(profile){
    var highest = ["", 0];
    for (var i = 0; i< profile.personality.length; i++) {
      var cur = profile.personality[i];
      if(cur.percentile > highest[1]){
        highest = [cur.name, cur.percentile];
      }
    }
    return highest[0];
  };
  var group = findGroup(profile);

  var data = {
    id: query.id,
    persona: profile.personality,
    group: group,
    name: query.name,
    location: query.location,
    screen_name: query.screen_name,
    img: query.img
  }
  // req.body.user='HackReactor';
  userController.addUser(data);

  var sendBack = {
    personalityScores: {
      persona: profile.personality,
    },
    similarGroup: similarGroup,
    dominantGroup: group
  };
  res.json(sendBack);
  // var data = profile.personality;
  // findUser({userId: id})
  //   .then(function(user){
  //     console.log("GOT TO HERE ", id);
  //     user.persona = data;
  //   })
  //   // .save()
  //   .then(function(u){
  //     console.log('FOUND THIS PERSON');
  //     // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
  //     res.json(profile.personality);
  //   });
    // .find()
    // .where('userId').equals(id)
    // .then(function(user){
    //   console.log('found this user ', user);
    //   console.log('data in here is ', data);
    //   console.log(user.persona);
    //   user.persona = data;
    //   console.log(user);
    //   user.save();
    // });
};

//FOR WATSON LATER ON WITH REAL DATA -Vi
// app.get('/personality', function(req, res, next) {
//   personality_insights.profile(req.body, function(err, profile) {
//     if (err)
//       return next(err);
//     else
//       watson.handleWatsonPersona(profile);
//   });

  //FOR WATSON LATER ON WITH REAL DATA -Vi
// app.get('/personality', function(req, res, next) {
//   personality_insights.profile(req.body, function(err, profile) {
//     if (err)
//       return next(err);
//     else
//       return res.json(profile);
//   });
// });