var watsonCtrl = require('../watson/watsonController');
var twitterCtrl = require('../twitter/twitterController');
var userCtrl = require('../user/userController');
var Q = require('q');

var findData = Q.nbind(User.)

//check if user saved in db (check for persona data)
module.exports = {
  personaData: function(req, res) {
    //check if persona data exists
    var userData = userCtrl.getData();
    if(userData) {
      res.send(userData);
    }
    }

  }
}
//calls twitter function to get data
//use promises so when twitter data has completed

//retrieved tweets from db w/ user ID
//send tweets data into Watson
  //watson responds with data and make req to server
  //receive response from Watson and store in db