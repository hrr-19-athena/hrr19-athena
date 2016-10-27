var Twitter = require('twitter-api').Twitter;

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
  getUserPosts: function(id, count, cb){
    var twitterPosts = [];

      var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
      };
      var success = function (data) {
        // console.log('id [%s]', JSON.parse(data)[0].id);
        // console.log('text [%s]', JSON.parse(data)[0].text);
        // console.log('lang [%s]', JSON.parse(data)[0].lang);
        //console.log('created_at [%s]', JSON.parse(data)[0].created_at);
        var twitterData = JSON.parse(data);
          twitterData.forEach(function(post) {
          var userTweet = {
            content: "",
            contenttype: "",
            //created: "",
            id: "",
            language: ""
          };
          userTweet.content = post.text;
          userTweet.contenttype = 'text/plain';
          //userTweet.created = post.created_at;
          userTweet.id = post.id;
          userTweet.language = post.lang;
          twitterPosts.push(userTweet);
        });
        //console.log(JSON.stringify(twitterPosts));
        cb(JSON.stringify(twitterPosts));
      };
      twitter.getUserTimeline({ id: id, count: count}, error, success);
    }
};