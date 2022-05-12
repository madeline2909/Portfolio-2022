import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//scroll to btn
const scrollToBtn = gsap.timeline({paused:true});
scrollToBtn
.from(".topBtn", {
    xPercent: 100,
    //alpha: 0,
    duration:0.75
})

export function scrollToAnim(){
    ScrollTrigger.create({
        animation:scrollToBtn,
        trigger: ".prj-header",
        start: "top bottom", 
        id: "topBtn",
    
        //markers: true,
        toggleActions: "restart none none reverse"
    });
}

//move btn
export function moveBtnAnim(){
    ScrollTrigger.matchMedia({
        // tablet
        "(min-width: 768px)": function() {
          gsap.to(".topBtn", {
            yPercent: -100,
            scrollTrigger: {
                trigger: "footer",
                start: "top bottom", 
                id: "moveBtn",
                //markers: true,
                toggleActions: "restart none none reverse"
            }
          });
        },
      
        // mobile
        "(max-width: 767px)": function() {
          gsap.to(".topBtn", {
            yPercent: -160,
            scrollTrigger: {
                trigger: "footer",
                start: "top bottom", 
                id: "moveBtn",
                //markers: true,
                toggleActions: "restart none none reverse"
            }
          });
        }
    });
}

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

