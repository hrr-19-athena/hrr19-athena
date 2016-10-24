var express = require('express');
var bluemix = require('../node_modules/bluemix/lib/bluemix.js');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var extend = require('util')._extend;
var keys = require('./api-services.js');

var app = express();

app.use(express.static('client'));

//CREDENTIALS IF WE NEED TO GENERATE ON THE FLY - still buggy - Vi
// var credentials = extend({
//   version:'v2',
//   username: username,
//   password: password
// }), bluemix.getServiceCreds('personality_insights'));

// // Create the service wrapper
// var personality_insights = watson.personality_insights(credentials);

//CREDENTIALS SECTION - Vi
var personality_insights = new PersonalityInsightsV3({
  username: keys.watsonPersonality.username,
  password: keys.watsonPersonality.password,
  version_date: '2016-10-20'
});

//TEMPORARY WATSON FOR FAKE HARD-CODED DATA - Vi
var params = {
  content_items: require('./profile.json').contentItems,
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

//TEMPORARY WATSON FOR FAKE HARDCODED DATA -Vi
personality_insights.profile(params, function(error, response) {
  if(error) {
    console.log('error: ', error);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});

//FOR WATSON LATER ON WITH REAL DATA -Vi
// app.post('/', function(req, res, next) {
//   personality_insights.profile(req.body, function(err, profile) {
//     if (err)
//       return next(err);
//     else
//       return res.json(profile);
//   });
// });

// render index page
app.get('/', function(req, res) {
  res.render('index');
});

var port = process.env.port || 3000;
app.listen(port);
console.log('listening at:', port);


