var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var keys = require('../api-services.js');
var UserModel = require('../user/userModel.js');
var Q = require('q');
// Promisify mongoose methods with the `q` promise library
var findUser = Q.nbind(UserModel.findOne, UserModel);
var createUser = Q.nbind(UserModel.create, UserModel);
var findAll = Q.nbind(UserModel.find, UserModel);
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
module.exports.params = {
  content_items: require('../profile.json').contentItems,
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

module.exports.handleWatsonPersona = function(twitterFeed, userId, res){
  var id = userId;
  module.exports.personality_insights.profile(twitterFeed, function(err, profile) {
    if (err)
      return next(err);
    else
      module.exports.massageAndSave(profile, id, res);
  });
};

module.exports.massageAndSave = function(response, id, res){
  var data = JSON.stringify(response.personality);
  console.log(data);
  findUser({userId: id})
    .then(function(user){
      user.persona = data;
      user.save();
    }).then(function(u){
      res.json(data);
    });
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