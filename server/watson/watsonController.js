var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var keys = require('../api-services.js');
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

//FOR WATSON LATER ON WITH REAL DATA -Vi
// app.post('/', function(req, res, next) {
//   personality_insights.profile(req.body, function(err, profile) {
//     if (err)
//       return next(err);
//     else
//       return res.json(profile);
//   });
// });