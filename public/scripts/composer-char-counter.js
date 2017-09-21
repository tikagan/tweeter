$( document ).ready(function() {
  $( document ).ready(function() {
  $(".container .new-tweet").find("textarea").keyup(function(){
    let tweetLength = $(this).val().length;
    $(this).parent().find("span").text(140 - (tweetLength));
    if (tweetLength > 140) {
      console.log("over")
      $(this).parent().find(".counter").removeClass("under-count").addClass("over-count");
    } else if (tweetLength <= 140) {
      console.log("under")
      $(this).parent().find(".counter").removeClass("over-count").addClass("under-count");
    }
  });
});
});
