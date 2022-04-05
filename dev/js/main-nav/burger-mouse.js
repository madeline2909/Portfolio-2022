import $ from "jquery";
//import {gsap} from "gsap";

import {burgerAnimationTimeline,navAnimationTimeline} from "./burger-animation.js";
import {canYouSeeTheMenu} from "./nav-global.js";


export function burgerClick(){
    $("#burger-container").on("click", function () {
        console.log("click");
        if (canYouSeeTheMenu === false) {
            burgerAnimationTimeline.play("burgerToX");
            navAnimationTimeline.play("burgerToX")
        } else {
            burgerAnimationTimeline.reverse("burgerToX");
            navAnimationTimeline.reverse("burgerToX")
        }
    });
}