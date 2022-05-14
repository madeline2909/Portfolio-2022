import {gsap} from "gsap";
import $ from "jquery";
import barba from '@barba/core';
//import {burgerClick} from "./burger-mouse.js";
import {burgerAnimationTimeline,navAnimationTimeline} from "./burger-animation.js";

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


//****************************************BARBA
//const allHeader = document.querySelectorAll("header");

export function pageTransition() {
    barba.init({
        sync:true,
        transitions: [{
          name: 'opacity-transition',
           leave(data) {
            //const done = this.async();
            gsap.to(data.current.container, {
                opacity: 0,
                y:"-100vh",
                ease:"Power2.easeInOut",
                duration: 1.25
            });
            //done();
          },
          beforeLeave(){
            if (canYouSeeTheMenu === true) {
                //put back the main nav
                mainNavTimeline.reverse();
                burgerAnimationTimeline.reverse("burgerToX");
                navAnimationTimeline.reverse("burgerToX");
                canYouSeeTheMenu = false;

            }
          },
          afterEnter(){
                //move the nav off screen on the Y axis
                // gsap.set("#main-nav", {
                //     y: -navHeight
                // })

                // if (canYouSeeTheMenu === false) {
                //     console.log("show me the menu");
                //     //reset it back to true so menu will go away
                //     //play the main nav animation into view; pull it down
                //     mainNavTimeline.play();
                //     canYouSeeTheMenu = true;
                // } else {
                //     console.log("hide the menu");
                //     //reset it back to false so menu will be back
                //     //reverse the animation of main nav out of view; push it up
                //     mainNavTimeline.reverse();
                //     canYouSeeTheMenu = false;
                // }

                // $(allHeader).css('position', 'fixed');
                // $(allHeader).css('z-index', 3000);

                // $(".burger-container").on("click", hideShowMainNav)
                // $(".burger-container").on("click", function () {
                //     console.log("click");
                //     if (canYouSeeTheMenu === false) {
                //         burgerAnimationTimeline.play("burgerToX");
                //         navAnimationTimeline.play("burgerToX")
                //     } else {
                //         burgerAnimationTimeline.reverse("burgerToX");
                //         navAnimationTimeline.reverse("burgerToX")
                //     }
                // });
          },
           enter(data) {
            //const done = this.async();
            gsap.from(data.next.container, {
                    opacity: 0,
                    y:"100vh",
                    ease:"Power2.easeInOut",
                    duration: 1.25
                });
            //done();
          }
        }]
      });
    
}

