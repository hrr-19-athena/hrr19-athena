var Persona = require('../persona/personaController.js');
var Twitter = require('../twitter/Twitter.js').Twitter;
//var Twitter = require('twitter-node-client').Twitter;

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
        location: "",
        img: "",
        name: ""
      };
      userTweet.content = post.text;
      userTweet.contenttype = 'text/plain';
      //userTweet.created = post.created_at;
      userTweet.id = String(post.user.id);
      userTweet.language = post.lang;
      userTweet.screen_name = post.user.screen_name;
      userTweet.location = post.user.location;
      userTweet.img = post.user.profile_image_url;
      userTweet.name = post.user.name;

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
    twitterNameResults.forEach(function(twitterName,index){
      queue.push(twitterName);
      if(index <= maxPopulation){
        module.exports.getUserPosts(twitterName,1, function(posts){
          var id = JSON.parse(posts)[0].id;
          var name = JSON.parse(posts)[0].name;
          var location = JSON.parse(posts)[0].location;
          var screen_name = JSON.parse(posts)[0].screen_name;
          var img = JSON.parse(posts)[0].img;
          var req ={
            query: {
              id: id,
              name: name,
              location: location,
              screen_name: screen_name,
              img: img
            }
          };
          //console.log(req);
          Persona.personaData(req);
        });
      }


    });

  });
}

module.exports.populate = function(seedProfiles, postsPerUser, maxPopulation){
  var count = 0;
  var maxPopulation = 10;
  var postsPerUser = 100;
  var seedProfiles = ['@HackReactor'];

  seedProfiles.forEach(function(seedProfile){
    gatherProfiles(seedProfile, postsPerUser, maxPopulation);
  });
}

// var count = 0;
// var maxPopulation = 10;
// var postsPerUser = 1;
// var seedProfiles = ['@HackReactor'];

//module.exports.populate(seedProfiles, postsPerUser, maxPopulation);
