// //Get the button:
// var mybutton = document.getElementsByClassName('topBtn');
 
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};


// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
//  function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollTop(){
  document.querySelectorAll(".topBtn").forEach(
    a => {
    a.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:0});
    });
    }
  );
}
