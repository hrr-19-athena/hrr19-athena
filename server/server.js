var express = require('express');
//var morgan = require('morgan');

var bodyParser = require('body-parser');
// var jwt = require('express-jwt');
var extend = require('util')._extend;
var Twitter = require('twitter-node-client').Twitter;
var watson = require('./watson/watsonController.js');
var Persona = require('./persona/personaController.js');
var userController = require('./user/userController.js');

//DATABASE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/persona');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});
db.on('open', function(){
  console.log('opened');
});


//EXPRESS SERVER
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());

app.use(express.static('__dirname/../client'));

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});


//AUTH0 api call
app.get('/api/clientcred', function(req, res) {
  var Auth0Cred = {
    AUTH0_CLIENT_ID : process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN : process.env.AUTH0_DOMAIN
  }
  res.send(Auth0Cred);
});

//DATABASE ROUTES

app.post('/api/users/signin', function(req, res) {
  //list one user
});
app.post('/api/users/signup', userController.addUser);


// app.get('/api/findAllUsers', userController.listAllUsers);
// app.get('/api/findOneUser', userController.find);

// //personaController - where the magic happens
// app.get('/profileAnalysis', function(req, res) {
//   //when profile page loads for user gets finished results for current
// })

// app.post('/genAnalysis', function(req, res) {
//   //user data sent in
//   //check in db if persona data exists
//   //if not generate
// })


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

// var error = function (err, response, body) {
//   console.log('ERROR [%s]', err);
// };
// var success = function (data) {
//   console.log('Data [%s]', JSON.parse(data)[0].id);
//   console.log('Data [%s]', JSON.parse(data)[0].text);
//   console.log('Data [%s]', JSON.parse(data)[0].lang);
//   console.log('Data [%s]', JSON.parse(data)[0].created_at);
// };

// var config = {
//   'consumerKey': keys.twitter.key,
//   'consumerSecret': keys.twitter.secret,
//   'accessToken': keys.twitter.token,
//   'accessTokenSecret': keys.twitter.tokenSecret,
//   'callBackUrl': 'https://hrr19-athena.herokuapp.com/api/twitter'
// };

//CALLBACK URL ROUTE
// app.get('/api/twitter', function());

// var Twitter = require('twitter-node-client').Twitter;
// var twitter = new Twitter();

// twitter.getUserTimeline({ screen_name: 'HackReactor', count: '20'}, error, success);







//HOW TO USE HANDLEWATSONPERSONA -Vi
// app.get('/personality', function(req, res) {
//     watson.handleWatsonPersona(watson.params, '9', res);
// });

