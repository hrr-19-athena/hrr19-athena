var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userId: String,
    twitter: {
        posts: [String],
        commonFriends: [String]
    },
    facebook: {
        posts: [String]
    },
    watson: {
        results: [String]
    }
});

module.exports = mongoose.model('User', userSchema);