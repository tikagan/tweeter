var data = []

//creates emtpy tweet element and inserts data taken
// from inputted tweet object into html skeleton
const createTweetElement = function (tweetObj) {
  const name = tweetObj.user.name
  const avatar = tweetObj.user.avatars.regular
  const handle = tweetObj.user.handle
  const text = (tweetObj.content.text).toString()
  // const created = (tweetObj.created_at/6000)
  const time = moment(tweetObj.created_at).fromNow();
  const tweetSkeleton = $(`<article class="tweet">
  <header>
  <img class="avatar" src="${avatar}">
  <h1> ${name} </h1>
  <h5> ${handle} </h5>
  </header>
  <p> ${text} </p>
  <footer>
  <p> ${time} </p>
  <i class="fa fa-heart"></i>
  <i class="fa fa-retweet"></i>
  <i class="fa fa-flag"></i>
  </footer>
  </article>`)
  $('#tweets').prepend(tweetSkeleton)
}

//for runs createTweetElement function  for each
//object (index) in the array given
const renderTweets = function (data) {
  data.forEach(function(tweetObj) {
    var $tweet = createTweetElement(tweetObj)
    $('#tweets').append($tweet)
  }
)}

const loadTweets = function(){
  //make a ajax request to /tweets
  $.get('/tweets', {}, renderTweets)
    .fail(function(error) {
      console.error(error)
    })
}

$( document ).ready(function() {
//loads tweets each time the page is loaded and displays them in reverse chronological order
  loadTweets()

  $('#submit-tweet').on('submit', function (event) {
    //prevents default post request on submit button
    event.preventDefault()
    const tweetContainer = $(this).closest('main')
    let tweet = $(this).find('textarea').val()
//error catching for tweets that are too long or empty
    if (tweet.length > 140) {
      $(`<h3 class="error"> Tweet exceeds the character limit! </h3>`).prependTo(tweetContainer)
      return
    }
    if (tweet === "" || tweet == null) {
      $(`<h3 class="error"> Please write a tweet! </h3>`).prependTo(tweetContainer)
      return
    }
    if (tweet.length < 140 && tweet !== null) {
      $('.error').remove()
    }
//creating the newdata from text inputted into the textarea
    let newTweet = $(this).serialize()
    //posting via ajax
    $.post('/tweets/', newTweet)
      .done(function(result) {
        //adds new tweet to current page w ajax
        loadTweets()
        //clears textarea
        $('.textarea').val('')
      })
      .fail(function(error) {
      console.error(error)
      })
    })
//these are the closing brackets for $(doc).ready
})
