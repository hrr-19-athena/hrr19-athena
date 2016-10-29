var mongoose = require('mongoose');

// Define User Schema
var userSchema = mongoose.Schema({
    userId: String,
    twitter: {
        posts: [String],
        commonFriends: [String],
        name: String,
        location: String,
        screen_name: String,
        img: String,
        description: String
    },
    facebook: {
        posts: [String]
    },
    watson: {
        results: [String]
    },
    persona:Object,
    personaGroup:String
});

// Export User Model
module.exports = mongoose.model('User', userSchema);