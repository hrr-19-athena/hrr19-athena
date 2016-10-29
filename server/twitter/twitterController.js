// Direct require to  Twitter.js with keys referenced in .env
var Twitter = require('./Twitter.js').Twitter;

// Create new Twitter Instance
var twitter = new Twitter();

module.exports = {
  getUserPosts: function(id, count, cb){
    var twitterPosts = [];

      var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
      };
      var success = function (data) {
        var twitterData = JSON.parse(data);
          twitterData.forEach(function(post) {
          var userTweet = {
            content: "",
            contenttype: "",
            id: "",
            language: ""
          };
          userTweet.content = post.text;
          userTweet.contenttype = 'text/plain';
          userTweet.id = post.id;
          userTweet.language = post.lang;
          twitterPosts.push(userTweet);
        });
        cb(JSON.stringify(twitterPosts));
      };
      // Access Twitter API and get the user data
      twitter.getUserTimeline({ id: id, count: count}, error, success);
    }
};