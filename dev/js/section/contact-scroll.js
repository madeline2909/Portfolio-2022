import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

////index bio animation

const contactListAnimTL = gsap.timeline({paused:true});
contactListAnimTL
.from(".contact-anim-btn", {
    yPercent: -10,
    alpha: 0,
    duration:0.75,
    stagger:0.1
})
.from(".contact-anim-email", {
    xPercent: -30,
    alpha: 0,
    duration:0.75,
    stagger:0.1
},"-=0.5")


export function contactAnim(){
    ScrollTrigger.create({
        animation:contactListAnimTL,
        trigger: "#contact-container",
        toggleActions: "play none none none"
    });
}

