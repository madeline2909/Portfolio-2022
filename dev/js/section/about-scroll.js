import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

////index bio animation
const aboutAnimTL = gsap.timeline({paused:true});
aboutAnimTL
.from("#about-anim-first", {
    xPercent: -10,
    alpha: 0,
    duration:0.75
})
.from("#about-anim-pic", {
    xPercent: 20,
    alpha: 0,
    duration:0.75
},"-=0.2", "aboutpic")
.from("#thisisme", {
    yPercent: 5,
    alpha: 0,
    duration:0.75
},"-=0.2", "aboutpic")

const aboutBioAnimTL = gsap.timeline({paused:true});
aboutBioAnimTL
.from("#about-anim-1", {
    xPercent: -10,
    alpha: 0,
    duration:0.75
})
.from("#about-anim-2", {
    xPercent: -10,
    alpha: 0,
    duration:0.75
},"-=0.5")
.from("#about-anim-3", {
    xPercent: -10,
    alpha: 0,
    duration:0.75
},"-=0.5")

const aboutResumeAnimTL = gsap.timeline({paused:true});
aboutResumeAnimTL
.from(".about-anim-resume-1", {
    xPercent: -10,
    alpha: 0,
    duration:0.75
})
.from(".about-anim-resume-2", {
    xPercent: -8,
    alpha: 0,
    duration:0.75,
    stagger:0.1
},"-=0.4")
.from("#full-resume", {
    yPercent: -10,
    alpha: 0,
    duration:0.75
})


export function aboutAnim(){
    ScrollTrigger.create({
        animation:aboutAnimTL,
        trigger: "#about-container",
        toggleActions: "play none none none"
    });
    ScrollTrigger.create({
        animation:aboutBioAnimTL,
        trigger: "#about-anim-1",
        start:"top 700px",
        //markers: true,
        toggleActions: "play none none none"
    });
    ScrollTrigger.create({
        animation:aboutResumeAnimTL,
        trigger: "#resume-container",
        toggleActions: "play none none none"
    });
}

