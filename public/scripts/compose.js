$( document ).ready(function() {
  $('.compose').on('click', function() {
    $(".new-tweet").slideToggle(400, function() {
      $("#submit-tweet").find('textarea').focus()
    })
  })
})
