var Twitter = require('twitter-node-client').Twitter;

// start twitter
var twitter = new Twitter();

module.exports = {
  getUserPosts: function(screenName, count, callback){
    var twitterPosts = [];

    var error = function (err, response, body) {
      console.log('ERROR [%s]', err);
    };
    var success = function (data) {
    //console.log(JSON.parse(data));
      var twitterData = JSON.parse(data);
      twitterData.forEach(function(post) {
      var userTweet = {
        content: "",
        contenttype: "",
        //created: "",
        id: "",
        language: "",
        screen_name: "",
        //place: ""
      };
      userTweet.content = post.text;
      userTweet.contenttype = 'text/plain';
      //userTweet.created = post.created_at;
      userTweet.id = String(post.id);
      userTweet.language = post.lang;
      userTweet.screen_name = post.user.screen_name;
      //userTweet.place = post.place;
      twitterPosts.push(userTweet);
      });
      //console.log(twitterPosts);
      //console.log(JSON.stringify(twitterPosts));
      callback(JSON.stringify(twitterPosts));

    };

    twitter.getUserTimeline({ screen_name: screenName, count: count}, error, success);
  }
};

var queue = [];
var gatherProfiles = function(seedProfile, postsPerUser, maxPopulation){
  module.exports.getUserPosts(seedProfile, postsPerUser, function(posts){
    // Get the seed screen_name
    var screenName = JSON.parse(posts)[0].screen_name;
    // parse for twitternames
    var twitterNameRegex = /(^|[^@\w])@(\w{1,15})\b/g;
    var twitterNameResults = posts.match(twitterNameRegex);
    var twitterNameSanitizeRegex = /[@\w](\w{1,15})\b/g;
    var twitterNameResults = JSON.stringify(twitterNameResults).match(twitterNameSanitizeRegex);
    console.log('Twitter Friends', twitterNameResults);

    //write to db
    twitterNameResults.forEach(function(twitterName){
      queue.push(twitterName);
      // make get request
    });

  });
}

var populate = function(seedProfiles, postsPerUser, maxPopulation){
  seedProfiles.forEach(function(seedProfile){
    gatherProfiles(seedProfile, postsPerUser, maxPopulation);
  });
}

var count = 0;
var maxPopulation = 5;
var postsPerUser = 100;
var seedProfiles = ['@HackReactor'];

populate(seedProfiles, postsPerUser, maxPopulation);
