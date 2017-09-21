/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
  const createTweetElement = function (tweetObj) {
    const name = tweetObj.user.name
    const avatar = tweetObj.user.avatars.regular
    const handle = tweetObj.user.handle
    const text = (tweetObj.content.text).toString()
    const created = (tweetObj.created_at/6000)
    const tweetSkeleton = $(`<article class="tweet">
    <header>
    <img class="avatar" src="${avatar}">
    <h1> ${name} </h1>
    <h5> ${handle} </h5>
    </header>
    <p> ${text} </p>
    <footer>
    <p> ${created} </p>
    <i class="fa fa-heart"></i>
    <i class="fa fa-retweet"></i>
    <i class="fa fa-flag"></i>
    </footer>
    </article>`)
    $('#tweets').prepend(tweetSkeleton)
  }

  const renderTweets = function (data) {
    data.forEach(function(tweetObj) {
      var $tweet = createTweetElement(tweetObj)
      $('#tweets').append($tweet)
    }
  )}
  renderTweets(data)
})

// Test / driver code (temporary). Eventually will get this from the server.
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
