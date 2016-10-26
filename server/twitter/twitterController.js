var Twitter = require('twitter-node-client').Twitter;

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
  getUserPosts: function(screenName, count, cb){
    // testing values
    var screenName = 'HackReactor';
    var count = 10;

    var twitterPosts = {
      contentItems: []
    };
    var userTweet = {
      content: "",
      contenttype: "",
      created: "",
      id: "",
      language: ""
    };

    var error = function (err, response, body) {
      console.log('ERROR [%s]', err);
    };
    var success = function (data) {
      console.log('id [%s]', JSON.parse(data)[0].id);
      console.log('text [%s]', JSON.parse(data)[0].text);
      console.log('lang [%s]', JSON.parse(data)[0].lang);
      console.log('created_at [%s]', JSON.parse(data)[0].created_at);

      var twitterData = JSON.parse(data);
      twitterData.forEach(function(post) {
        userTweet.content = post.text;
        userTweet.contentType = 'text/plain';
        userTweet.created = post.created_at;
        userTweet.id = post.id;
        userTweet.language = post.lang;

        twitterPosts.contentItems.push(userTweet);
      });

      cb(twitterPosts);

    };

    twitter.getUserTimeline({ screen_name: screenName, count: count}, error, success);
  }
};
