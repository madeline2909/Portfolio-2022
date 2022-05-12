// import {
//     gsap
// } from "gsap";
// import barba from '@barba/core';

// import $ from "jquery";

// import {canYouSeeTheMenu} from "./main-nav/nav-global.js";
// import {burgerClick} from "./main-nav/burger-mouse.js";
// import {navClick} from "./main-nav/main-nav-click.js";
// import {reportWindowSize} from "./main-nav/nav-global.js";
// // import {menuBgSelect} from "./main-nav/nav-global.js";

// // burgerClick();
// // navClick();
// reportWindowSize();
// // menuBgSelect();

// import {
//     mainNavTimeline
// } from "./main-nav/nav-global.js";

// //var canYouSeeTheMenu = false;
// var navHeight = $("#main-nav").outerHeight();

// // const mainNavTimeline2 = gsap.timeline({
// //     paused: true
// // })
// // mainNavTimeline2.from("#main-nav", {
// //     duration: 0.5,
// //     y: 0
// // })

// export function pageTransition() {
//     barba.init({
//         transitions: [{
//           name: 'opacity-transition',
//           leave(data) {
//             return gsap.to(data.current.container, {
//               opacity: 0
//             })
            
            
//           },
//           beforeLeave(){
//             //mainNavTimeline2.reverse();
//             // mainNavTimeline.reverse();
//             // canYouSeeTheMenu = false;

//             // if (canYouSeeTheMenu === true) {
//             //     //put back the main nav
//             //     mainNavTimeline.reverse();
//             //     canYouSeeTheMenu = true;
//             // }

//             // burgerClick();
//             // navClick();
//             // reportWindowSize();
//             // menuBgSelect();
            
//           },
//           afterEnter(){
//                 //move the nav off screen on the Y axis
//                 gsap.set("#main-nav", {
//                     y: -navHeight
//                 })
//                 if (canYouSeeTheMenu === false) {
//                     //console.log("show me the menu");
//                     //reset it back to true so menu will go away
//                     //play the main nav animation into view; pull it down
//                     mainNavTimeline.play();
//                     canYouSeeTheMenu = true;
//                 } else {
//                     // console.log("hide the menu");
//                     //reset it back to false so menu will be back
//                     //reverse the animation of main nav out of view; push it up
//                     mainNavTimeline.reverse();
//                     canYouSeeTheMenu = false;
//                 }
//                 navClick()
//                 burgerClick()
//           },
//           enter(data) {
//             return gsap.from(data.next.container, {
//               opacity: 0
//             });
//           }
//         }]
//       });
    
// }