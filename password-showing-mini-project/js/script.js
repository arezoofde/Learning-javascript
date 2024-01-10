 // Functions for select elems with id & class
 var $ = document;
 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems
 let formelement = document.querySelector('.form-element');
  var togglePassword =document.querySelector(".toggle-password");
 var passwordField = document.getElementById("password-field");



 // Fire click event on eye icon
 togglePassword[0].addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
     togglePassword[0].classList.remove("active");
   } else {
     passwordField.type = "text";
     togglePassword[0].classList.add("active");
   }
 })