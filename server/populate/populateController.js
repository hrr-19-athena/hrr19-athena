// This controller is a helper function only used to help populate user in the database locally or via a deployed server
// Both populateController and twitterController can be refactored for more code reuse.

// Add Persona Controller to feed Twitter data into
var Persona = require('../persona/personaController.js');

// Direct require to  Twitter.js with keys referenced in .env
var Twitter = require('../twitter/Twitter.js').Twitter;


// Create new Twitter Instance
var twitter = new Twitter();

module.exports = {
  // Access the Twitter API to get user Timelines
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
        name: "",
        description:""
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
      userTweet.description = post.user.description;

      twitterPosts.push(userTweet);
      });
      callback(JSON.stringify(twitterPosts));

    };

    twitter.getUserTimeline({ screen_name: screenName, count: count}, error, success);
  }
};

// Used later to drill down and get more users from list of friends
var queue = [];

// Gathers Twitter profiles a user interacts with and add them to the database
var gatherProfiles = function(seedProfile, postsPerUser, maxPopulation){
  module.exports.getUserPosts(seedProfile, postsPerUser, function(posts){
    // Get the Seed screen_name
    var screenName = JSON.parse(posts)[0].screen_name;

    // Parse for Twitter Names
    var twitterNameRegex = /(^|[^@\w])@(\w{1,15})\b/g;
    var twitterNameResults = posts.match(twitterNameRegex);
    var twitterNameSanitizeRegex = /[@\w](\w{1,15})\b/g;
    var twitterNameResults = JSON.stringify(twitterNameResults).match(twitterNameSanitizeRegex);
    console.log('Twitter Friends', twitterNameResults);

    //Write each new Twitter User into the Database
    twitterNameResults.forEach(function(twitterName,index){
      queue.push(twitterName);
      if(index <= maxPopulation){
        // Pull the Twitter data to ingest into the analysis api to generate new users with data
        module.exports.getUserPosts(twitterName,1, function(posts){
          var id = JSON.parse(posts)[0].id;
          var name = JSON.parse(posts)[0].name;
          var location = JSON.parse(posts)[0].location;
          var screen_name = JSON.parse(posts)[0].screen_name;
          var img = JSON.parse(posts)[0].img;
          var description = JSON.parse(posts)[0].description;

          // Insert and format to required format
          var req ={
            query: {
              id: id,
              name: name,
              location: location,
              screen_name: screen_name,
              img: img,
              description: description
            }
          };
          // Need to refactor as a syncrounous call to the database to minimize anomalies.
          // Limited by rate limits
          Persona.personaData(req);
        });
      }
    });
  });
};

// Used by the API routes to generate new users with a seed Profile
module.exports.populate = function(seedProfiles, postsPerUser, maxPopulation){
  var count = 0;
  var maxPopulation = 1;
  var postsPerUser = 100;
  var seedProfiles = ['@Coheed'];

  // Allows the loading of an array of diverse seed profiles.
  seedProfiles.forEach(function(seedProfile){
    gatherProfiles(seedProfile, postsPerUser, maxPopulation);
  });
};
