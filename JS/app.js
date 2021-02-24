// // File Validation

function validateuser() {
    document.getElementById("validation-form").reset();
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var email = document.getElementById("mail").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf("."); 
    var tel = document.getElementById("phone").value;
    var telno = /^\d{10}$/;
    var re_email = document.getElementById("re-mail").value;
    var password = document.getElementById("pass").value;
    var re_password = document.getElementById("re-pass").value;
    var valid = true;

     
    // alert(first_name);
    if (first_name == "") {
             document.getElementById("fname-msg").innerHTML="Enter first name";
             document.getElementById("fname-msg").focus();
             valid = false;
        
    }
    if (last_name == ""){
        document.getElementById("lname-msg").innerHTML="Enter last name";
        document.getElementById("lname-msg").focus();
        valid = false;
    }
    if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ) ) {
        document.getElementById("mail-msg").innerHTML="Enter mail address or invalid";
        document.getElementById("mail-msg").focus();
        valid = false;
                
    } 
    if(email != re_email) {
        document.getElementById("remail-msg").innerHTML="Email address mismatch";
        document.getElementById("remail-msg").focus();
        valid = false;
                
    }

    if(tel.match(telno)) {
        document.getElementById("phone-msg").innerHTML="phone number is invalid";
        document.getElementById("phone-msg").focus();
        valid = false;
    }
    if(password == "" ){
        document.getElementById("pass-msg").innerHTML="Enter password";
        document.getElementById("pass-msg").focus();
        valid = false;
                   
    }
    if (password != re_password) {
        document.getElementById("repass-msg").innerHTML="password mismatch" 
        document.getElementById("repass-msg").focus();
        valid = false;
                    
    }
    if(valid) {
        alert("Form is submitted");
    }
    else {
        alert("Fill out the Form");
    }
}


// $(document).ready(function() {

//     $('#validation_form').submit(function(e) {
//       e.preventDefault();
//       var first_name = $('#fname').val();
//       var last_name = $('#lname').val();
//       var email = $('#mail').val();
//       var re_email = $('#re-mail').val();
//       var password = $('#pass').val();
//       var re_password = $('#re-pass').val();
//       var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
//       var validEmail = regEx.test(email);
  
//       $(".error").remove();
  
//       if (first_name ==" " || first_name == null ) {
//         $('#first_name').after('<span class="error">This field is required</span>');
//         $("span").css({"background-color": "yellow", "font-size": "200%"})
//       }
//       if (last_name ==" " || last_name == null) {
//         $('#last_name').after('<span class="error">This field is required</span>');
//       }
//       if (email.length < 1 ) {
//         $('#email').after('<span class="error">This field is required</span>');
//       } 
//       if(email != re_email) {
//         $('#re_email').after('<span class="error">Email enter is not matching</span>');
//       }
//      if (!validEmail) {
//           $('#email').after('<span class="error">Enter a valid email</span>');
//     }
//      if(password == " " ){
//         $('#password').after('<span class="error">Password is not matching</span>') 
//      }
//       if (password != re_password) {
//         $('#re_password').after('<span class="error">Password is not matching</span>');
//       }

//     });
  
//   });

    // var first_name = document.getElementById("fname").value;
    // var last_name = document.getElementById("lname").value;
    // var email = document.getElementById("mail").value;
    // var re_email = document.getElementById("re-mail").value;
    // var password = document.getElementById("pass").value;
    // var re_password = document.getElementById("re-pass").value;
    //  var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    // var validEmail = regEx.test(email);
    // // var isValid = true;
    // if (first_name === " " || first_name == null ) {
    //          document.getElementById("fname-msg").innerHTML="Enter first name";
    //          isValid = false;
    //     }
    // if (last_name === " " || last_name == null) {
    //             document.getElementById("lname-msg").innerHTML="Enter Last name";
    //             alert("Enter Last name");
    //             isValid = false;
    //     }
    // if (email.length < 1 ) {
    //             document.getElementById("mailmsg").innerHTML="Enter mail address";
    //             isValid = false;
    //     } 
    // if(email != re_email) {
    //             document.getElementById("remail-msg").innerHTML="Enter first name";
    //             isValid = false;
    //     }
    // if (!validEmail) {
    //             document.getElementById("mailmsg").innerHTML=" mail address is invalid" ;
    //             isValid = false;
    //     }
    // if(password === " " ){
    //             document.getElementById("passmsg").innerHTML="Enter password";
    //             isValid = false;
    //     }
    // if (password != re_password) {
    //             document.getElementById("repass-msg").innerHTML="password mismatch" 
    //             isValid = false;
    //     }
    //     return isValid;
// }