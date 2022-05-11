import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



//page titles animation
const headerAnimTL = gsap.timeline({paused:true});
headerAnimTL
.from(".headerAnim", {
    xPercent: -20,
    alpha: 0,
    duration:0.75
})

export function headerAnimation(){

    ScrollTrigger.create({
        animation:headerAnimTL,
        trigger: ".hero-container",
        id: "header",
        //markers: true,
        toggleActions: "play none none none"
    });
}

//caption animation
const captionAnimTL = gsap.timeline({paused:true});
captionAnimTL
.from(".captionAnim", {
    xPercent: 20,
    alpha: 0,
    duration:0.75
})

export function captionAnimation(){

    ScrollTrigger.create({
        animation:captionAnimTL,
        trigger: ".hero-container",
        id: "caption",
        //markers: true,
        toggleActions: "play none none none"
    });
}

 //pinning prj hero images
export function heroPinning(){

    ScrollTrigger.create({
        trigger: ".prj-hero-container",
        //id: "hero pinning",
        pin: true,
        pinSpacing: false,
        //markers: true,
        start: "top top",
        scrub: 1,
        toggleActions: "restart none none reverse"
    });
}