var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var keys = require('../api-services.js');
var UserModel = require('../user/userModel.js');
var Q = require('q');
var findUser = Q.nbind(UserModel.findOne, UserModel);
var createUser = Q.nbind(UserModel.create, UserModel);
var findAll = Q.nbind(UserModel.find, UserModel);
var userController = require('../user/userController.js');

var _ = require('underscore');
require('dotenv').config();


//CREDENTIALS SECTION - Vi
module.exports.personality_insights = new PersonalityInsightsV3({
  username: keys.watsonPersonality.username,
  password: keys.watsonPersonality.password,
  version_date: '2016-10-20'
});


module.exports.handleWatsonPersona = function(twitterFeed, userId, res){
  id = userId || 'HackReactor';
  var regex = /[a-zA-Z0-9^/:" "{},]/g;
  var results = twitterFeed.match(regex);
  var contentArray = [results.join('')];
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
      module.exports.massageAndSave(profile, id, res);
  });
};

module.exports.findSimilar = function(profile, id) {
  var curUserId = profile.userId || id;
  var profile = profile.persona || profile.personality;
  var similarGroup = [];
  var curTS = [];
  for (var i = 0; i< profile.length; i++) {
    curTS.push(0.5 - profile[i].percentile);
  }
 return Q(UserModel.find({}).exec())
    .then(function(users) {
      for (var j = 0; j<users.length; j++) {
        var userTS = [];
        var curUser = users[j].persona;
        for(var k = 0; k<curUser.length; k++) {
          userTS.push(0.5 - curUser[k].percentile);
        }
    //calculate gap for each
        var gap = 0;
        for(var l = 0; l<userTS.length; l++) {
          gap += (curTS[l] - userTS[l]);
        }
        if(Math.abs(gap) < 0.5 && users[j].userId !== curUserId){
          similarGroup.push(users[j]);
        }
      }
    return similarGroup;
    });
};

module.exports.massageAndSave = function(profile, query, res){
  console.log("GENERATING NEW ANALYSIS!!!!");
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

  module.exports.findSimilar(profile, id)
    .then(function(similarGroup){
      var data = {
        id: query.id,
        persona: profile.personality,
        group: group,
        name:query.name,
        location:query.location,
        screen_name:query.screen_name,
        img:query.img,
        description: query.description
      };
      userController.addUser(data);

      var sendBack = {
        personalityScores: {
          persona: profile.personality,
        },
        similarGroup: similarGroup,
        dominantTrait: group
      };
      res.json(sendBack);
    });
};

//CREDENTIALS IF WE NEED TO GENERATE ON THE FLY
//bluemix is for if we want to generate keys dynamically, we are not currently
// var bluemix = require('../node_modules/bluemix/lib/bluemix.js');
// var credentials = extend({
//   version:'v2',
//   username: username,
//   password: password
// }), bluemix.getServiceCreds('personality_insights'));

// // Create the service wrapper
// var personality_insights = watson.personality_insights(credentials);

//TEMPORARY WATSON FOR FAKE HARD-CODED DATA
// module.exports.params = {
//   content_items: require('../profile.json').contentItems,
//   consumption_preferences: true,
//   raw_scores: true,
//   headers: {
//     'accept-language': 'en',
//     'accept': 'application/json'
//   }
// };
