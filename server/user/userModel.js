var mongoose = require('mongoose');

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
        // group: Compasseionate, 5 groups with dominatnt trait
    },
    facebook: {
        posts: [String]
    },
    watson: {
        results: [String]
    },
    persona:Object,
    personaGroup:String
    // persona: {
    //     group: String,
    //     personalityAnalysis: String //BIG 5 only for now
    // }
});

module.exports = mongoose.model('User', userSchema);