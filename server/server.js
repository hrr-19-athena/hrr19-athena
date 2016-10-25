var express = require('express');
//var morgan = require('morgan');
var bodyParser = require('body-parser');
// var jwt = require('express-jwt');
//bluemix is for if we want to generate keys dynamically, we are not currently - vi
// var bluemix = require('../node_modules/bluemix/lib/bluemix.js');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var extend = require('util')._extend;
var keys = require('./api-services.js');
var Twitter = require('twitter-node-client').Twitter;


//EXPRESS SERVER
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());

app.use(express.static('__dirname/../client'));

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});

//WHATS GOING ON:
//REQ from front end
//app.post(/micahlesPersonalRoute, function(req, res){
  //assume req.body.id, req.body.token
  //use id to do a database lookup
    //2 scenarios:
      //1: USER NOT IN DATABSE
          //MICHAEL intiate get analysis(pass through twitter, pass through watson, this is lots of work we need to divy this)
              //parts of get analysis
                  //1. get twitter feed using userId, massage data, (later save to db $$$$$$)
                  //2. feed the twitter data into watson, save watson data to db (just the 5 personalities portion)
                  //3. send data to front end
              //how to group people -- later, group undefined
      //2: USER IS IN DATABASE
          //MICHAEL pull watson user results from database, send to front end


//TWITTER

var userTweetsArray = [];
var userTweets = {
  content: "",
  created: "",
  id: "",
  language: ""
};

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  console.log('Data [%s]', JSON.parse(data)[0].id);
  console.log('Data [%s]', JSON.parse(data)[0].text);
  console.log('Data [%s]', JSON.parse(data)[0].lang);
  console.log('Data [%s]', JSON.parse(data)[0].created_at);
};

// var config = {
//   'consumerKey': keys.twitter.key,
//   'consumerSecret': keys.twitter.secret,
//   'accessToken': keys.twitter.token,
//   'accessTokenSecret': keys.twitter.tokenSecret,
//   'callBackUrl': 'https://hrr19-athena.herokuapp.com/api/twitter'
// };

//CALLBACK URL ROUTE
// app.get('/api/twitter', function());

var Twitter = require('twitter-node-client').Twitter;
var twitter = new Twitter();

twitter.getUserTimeline({ screen_name: 'HackReactor', count: '20'}, error, success);

//AUTH0 api call
//app.get('/api/clientcred', )

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
// personality_insights.profile(params, function(error, response) {
//   if(error) {
//     console.log('error: ', error);
//   } else {
//     console.log(JSON.stringify(response, null, 2));
//   }
// });

//FOR WATSON LATER ON WITH REAL DATA -Vi
// app.post('/', function(req, res, next) {
//   personality_insights.profile(req.body, function(err, profile) {
//     if (err)
//       return next(err);
//     else
//       return res.json(profile);
//   });
// });


// <<<<<<< HEAD
// =======
// var port = process.env.PORT || 3000;
// app.listen(port);
// console.log('listening at:', port);
// >>>>>>> added documentation to spec
