import $ from "jquery";
//import {gsap} from "gsap";

import {burgerAnimationTimeline} from "./burger-animation.js";
import {navAnimationTimeline} from "./burger-animation.js";
import {canYouSeeTheMenu} from "./nav-global.js";


export function burgerClick(){
    $("#burger-container").on("click", function () {
        console.log("click");
        if (canYouSeeTheMenu === false) {
            burgerAnimationTimeline.play("burgerToX");
            navAnimationTimeline.play("burgerToX")
        } else {
            burgerAnimationTimeline.reverse("XToBurger");
            navAnimationTimeline.reverse("XToBurger")
        }
    });
}