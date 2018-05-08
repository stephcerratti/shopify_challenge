$( document ).ready(function() {
    console.log( "ready!" );

//run function to validate the email address
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $invalid = $("#invalid");
  var email = $("#email").val();
  // $result.text("");

  if (validateEmail(email)) {
    // $result.text(email + " is valid :)");
    
  } else {
  	$invalid.show();

  }
  return false;
}

$("#subscribe").bind("click", validate);

$(function() {
    // Get the form.
    var form = $('#ajax-form');

    // Get the messages div.
    var thankyou = $('#thankyou');

    $(form).submit(function(event) {
    event.preventDefault();

   var formData = $(form).serialize();

   	$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})
});
});







});