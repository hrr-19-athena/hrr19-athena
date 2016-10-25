var Twitter = require('twitter-node-client').Twitter;

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

// need to refactor and use
// var config = {
//   'consumerKey': keys.twitter.key,
//   'consumerSecret': keys.twitter.secret,
//   'accessToken': keys.twitter.token,
//   'accessTokenSecret': keys.twitter.tokenSecret,
//   'callBackUrl': 'https://hrr19-athena.herokuapp.com/api/twitter'
// };

var twitter = new Twitter();

module.exports = {
  getUserPosts: function(screenName, count){
    // testing values
    var screenName = 'HackReactor';
    var count = 0;
    twitter.getUserTimeline({ screen_name: screenName, count: count}, error, success);
  }
};
