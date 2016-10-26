var watsonCtrl = require('../watson/watsonController');
var twitterCtrl = require('../twitter/twitterController');
var userCtrl = require('../user/userController');
var Q = require('q');

//check if user saved in db (check for persona data)
twitterCtrl.getUserPosts(screenName, count);
//calls twitter function to get data
//use promises so when twitter data has completed

//retrieved tweets from db w/ user ID
//send tweets data into Watson
  //watson responds with data and make req to server
  //receive response from Watson and store in db