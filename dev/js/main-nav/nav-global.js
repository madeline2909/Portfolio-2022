import {gsap} from "gsap";
import $ from "jquery";
//import barba from '@barba/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger);

//import {burgerClick} from "./burger-mouse.js";
//import {burgerAnimationTimeline,navAnimationTimeline} from "./burger-animation.js";

//can you see the menu?
export var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the nav off screen on the Y axis
gsap.set("#main-nav", {
    y: -navHeight
})


export const mainNavTimeline = gsap.timeline({
    paused: true
})
mainNavTimeline.to("#main-nav", {
    duration: 0.5,
    y: 0
})

export function hideShowMainNav() {
    //console.log("hide or show nav");
    //toggles the css display property

    if (canYouSeeTheMenu === false) {
        //console.log("show me the menu");
        //reset it back to true so menu will go away

        //play the main nav animation into view; pull it down
        mainNavTimeline.play();
        canYouSeeTheMenu = true;
    } else {
        //console.log("hide the menu");
        //reset it back to false so menu will be back

        //reverse the animation of main nav out of view; push it up
        mainNavTimeline.reverse();
        canYouSeeTheMenu = false;
    }
}

var menuBackground = document.querySelector("#main-nav");
export function menuBgSelect() {
    window.onclick = function (event) {
    if (event.target == menuBackground) {
        hideShowMainNav();
    }
    }
}

export function reportWindowSize() {
    //console.log("test");
    if (canYouSeeTheMenu === false) {
        //console.log("can't see the main nav");
        console.log($("#main-nav").outerHeight());
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav", {
            y: -navHeight
        });
    }
    // add a listener to the window for everytime it's resized
    window.addEventListener('resize', reportWindowSize);
}




//const allHeader = document.querySelectorAll("header");

// if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';
//   }

//   let scrollX = 0
// let scrollY = 0

// barba.hooks.leave(() => {
//   scrollX = barba.history.current.scroll.x;
//   scrollY = barba.history.current.scroll.y;
// });

// function initSmoothScrollbar() {
//     Scrollbar.init(document.querySelector('#viewport'), {damping: 0.07});
// }

// export function pageTransition() {
//     barba
//     .init({
//         sync:true,
//         debug: true,
//         transitions: [{
//           name: 'opacity-transition',
//         //   once() {
//         //     //fadeIn(next.container);
//         //     initSmoothScrollbar();
//         //     },  

//            leave(data) {
//             //const done = this.async();
//             gsap.to(data.current.container, {
//                 opacity: 0,
//                 y:"-100vh",
//                 ease:"Power2.easeInOut",
//                 duration: 1.25
//             });
//             //done();
//           },
//           beforeLeave(){
//             if (canYouSeeTheMenu === true) {
//                 //put back the main nav
//                 mainNavTimeline.reverse();
//                 burgerAnimationTimeline.reverse("burgerToX");
//                 navAnimationTimeline.reverse("burgerToX");
//                 canYouSeeTheMenu = false;
//             }
//             let triggers = ScrollTrigger.getAll();
//             triggers.forEach( trigger => {			
//               trigger.kill();
//             })
//           },
//           beforeEnter(){
//                 gsap.to(window, {duration: 0.1, scrollTo:0});
//                 // $(".burger-container").on("click", hideShowMainNav)
//                 // $(".burger-container").on("click", function () {
//                 //     console.log("click");
//                 //     if (canYouSeeTheMenu === false) {
//                 //         burgerAnimationTimeline.play("burgerToX");
//                 //         navAnimationTimeline.play("burgerToX")
//                 //     } else {
//                 //         burgerAnimationTimeline.reverse("burgerToX");
//                 //         navAnimationTimeline.reverse("burgerToX")
//                 //     }
//                 // });
                
//                 ScrollTrigger.create({
//                     animation:scrollToBtn,
//                     trigger: ".prj-header",
//                     start: "top bottom", 
//                     id: "topBtn",
                
//                     //markers: true,
//                     toggleActions: "restart none none reverse"
//                 });
                
//                 // ScrollTrigger.matchMedia({
//                 //     //desktop
//                 //     // "(min-width: 1024px)": function() {
//                 //     //     gsap.to(".topBtn", {
//                 //     //       scrollTrigger: {
//                 //     //         animation:scrollToBtn,
//                 //     //         trigger: ".prj-header",
//                 //     //         start: "top bottom", 
//                 //     //         id: "topBtn",
                        
//                 //     //         //markers: true,
//                 //     //         toggleActions: "restart none none reverse"
//                 //     //       }
//                 //     //     });
//                 //     //   },

//                 //     // tablet
//                 //     "(min-width: 768px)": function() {
//                 //       gsap.to(".topBtn", {
//                 //         yPercent: -100,
//                 //         scrollTrigger: {
//                 //             trigger: "footer",
//                 //             start: "top bottom", 
//                 //             id: "moveBtn",
//                 //             //markers: true,
//                 //             toggleActions: "restart none none reverse"
//                 //         }
//                 //       });
//                 //     },
                  
//                 //     // mobile
//                 //     "(max-width: 767px)": function() {
//                 //       gsap.to(".topBtn", {
//                 //         yPercent: -160,
//                 //         scrollTrigger: {
//                 //             trigger: "footer",
//                 //             start: "top bottom", 
//                 //             id: "moveBtn",
//                 //             //markers: true,
//                 //             toggleActions: "restart none none reverse"
//                 //         }
//                 //       });
//                 //     }
//                 // });

//                 //scrollTop();
//                 // scrollToAnim();
//                 // moveBtnAnim();
//           },
//            enter(data) {
//             //const done = this.async();
//             gsap.from(data.next.container, {
//                     opacity: 0,
//                     y:"100vh",
//                     ease:"Power2.easeInOut",
//                     duration: 1.25
//                 });
//             //done();
//           }
//         }]
//       });
    
// }

