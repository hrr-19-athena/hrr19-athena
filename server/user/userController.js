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
  addUser: function(data){
    // var user = req.body.user;
    createUser({
       userId: data.id,
        twitter: {
            posts: [],
            commonFriends: [],
            name: data.name,
            location: data.location,
            screen_name: data.screen_name,
            img: data.img,
            description: data.description
        },
        facebook: {
            posts: []
        },
        watson: {
            results: []
        },
        persona:data.persona,
        personaGroup:data.group
    });
  },
  getData: function(req, res) {
    var user = req.body.userId;
    findUser({userId: user})
      .then(function(user) {
        return user.persona;
      })
      .fail(function(error) {
        next(error);
      });
  },
  getUsersInGroup: function(req, res) {
    var group = req.query.group;
    findAll({personaGroup: group})
      .then(function(users) {
        res.send(users);
      });
  }
}; //end module.exports


