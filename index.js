var navButton= getElementsByClass("navlit")
var navDiv= getElementById("nav")
 
window.onscroll= function() {myFunction()};
 
var nav= document.getElementById("nav")
 
function myFunction() {
   if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky")
   } else{