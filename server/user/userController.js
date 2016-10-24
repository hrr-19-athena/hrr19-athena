var User = require('./userModel.js');
var Q = require('q');

// Promisify mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
var findAll = Q.nbind(User.find, User);

module.exports = {
  listAllUsers: function(req,res){
    findAll({})
      .then(function(users){
        console.log('db Users', users);
        res.send(users);
    });
  },
  listOneUser: function(req,res){
    var user = req.body.user;
    findUser({userId: user})
      .then(function(user){
        console.log('User', user);
        res.send(user);
    });
  },
  addUser: function(req,res){
    var user = req.body.user;
    createUser({
       userId: user,
        twitter: {
            posts: [],
            commonFriends: []
        },
        facebook: {
            posts: []
        },
        watson: {
            results: []
        }
    });
  }
} //end module.exports


