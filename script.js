$( document ).ready(function() {
//     console.log( "ready!" );
    
//     var email = document.getElementById("emailAddress").value;
//     var option = document.getElementById("option").value;

// //run function to validate the email address
// function validateEmail(valemail) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(valemail);
// }

// function validate() {
//   var $invalid = $("#invalid");
//   var valemail = $("#email").val();
//   // $result.text("");

//   if (validateEmail(valemail)) {
//     // $result.text(email + " is valid :)"); 
//     console.log(email);
//     console.log(option);
//   } else {
//   	$invalid.show();
//   }
//   return false;
// }

// $("#subscribe").bind("click", validate);

// $(function() {
//     // Get the form.
//     var form = $('#ajax-form');

//     // Get the messages div.
//     var thankyou = $('#thankyou');

//     $(form).submit(function(event) {
//     event.preventDefault();

//     document.getElementById("subscribe").innerHTML = "Submitting";
//     setTimeout(function(){
      
//     },2000);

//    var formData = $(form).serialize();

//    	$.ajax({
//     type: 'POST',
//     url: $(form).attr('action'),
//     data: formData
// }).done(function(response) {
//     // Make sure that the formMessages div has the 'success' class.
//     $(formMessages).removeClass('error');
//     $(formMessages).addClass('success');

//     // Set the message text.
//     $(formMessages).text(response);


// })
// });
// });
function getFormData(){
  $("#ajax-form").submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();
  });

// run function to validate the email address
function validateEmail(valemail) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(valemail);
}

function validate() {
  var $invalid = $("#invalid");
  var valemail = $("#email").val();
  // $result.text("");

  if (validateEmail(valemail)) {
    // $result.text(email + " is valid :)"); 
    console.log(email);
    console.log(option);
  } else {
   $invalid.show();
  }
  return false;
}

$("#subscribe").bind("click", validate);

  var email = document.getElementById("emailAddress").value;
  var interested = document.getElementById("option").value;
  if (email=="" || interest =="Interested in..."){
    document.getElementById("errormsg").innerHTML ="Please enter or pick a value before submitting.";
}
else{
  document.getElementById("subscribe").innerHTML = "Submitting";
  setTimeout(function(){
    // document.getElementById("form-success").innerHTML ="";
    // document.getElementById("thanks").innerHTML ="Thanks for subscribing";
    // document.getElementById("thanksmsg").innerHTML ="You'll start receiving free tips and resources soon.";
    console.log (email);
    console.log (interest);

  },2000);
}





}


});