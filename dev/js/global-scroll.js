import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//animating global header
// const headerAnimTL = gsap.timeline({paused:true});
// headerAnimTL
// .from(".headerAnim", {
//     duration: 0.5,
//     xPercent: -20,
//     alpha: 0
// })

// export function headerAnimation(){

//     ScrollTrigger.create({
//         animation: headerAnimTL,
//         toggleActions: "play none none none",
//         trigger: ".headerAnim",
//         start: "top 80%",
//         //markers: true,
//         id: "header"
//     });
// }

//page titles animation
const headerAnimTL = gsap.timeline({paused:true});
headerAnimTL
.from(".headerAnim", {
    yPercent: -50,
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