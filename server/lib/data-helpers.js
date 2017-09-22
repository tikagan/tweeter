"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay")

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, (err) => {
        if (err) {
          callback(err)
          return
        }
        callback(null, true)
      })
      // simulateDelay(() => {
        // db.tweets.push(newTweet);
        // callback(null, true);
      // })
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection('tweets').find().sort("created_at", 1).toArray(function (err, documents) {
        if (err) {
          callback(err)
          return
        }
        callback (null, documents)
      })
      // simulateDelay(() => {
      //   const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      //   callback(null, db.tweetArray.sort(sortNewestFirst));
      // })
    }
  }
}
