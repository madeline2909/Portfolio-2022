import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//index bio animation
const indexbioAnimTL = gsap.timeline({paused:true});
indexbioAnimTL
.from("#home-anim-1", {
    xPercent: -30,
    alpha: 0,
    duration:0.75
},"-=0.2")
.from("#big-title", {
    yPercent: -50,
    alpha: 0,
    duration:0.75
},"-=0.2")
.from("#home-anim-2", {
    xPercent: -30,
    alpha: 0,
    duration:0.75
},"-=0.2")
.from("#featured-prj", {
    yPercent: 100,
    duration:1,
    ease: "circ.out"
})

export function indexbioAnim(){

    ScrollTrigger.create({
        animation:indexbioAnimTL,
        trigger: ".hero-container",
        id: "home-bio",
        //markers: true,
        toggleActions: "play none none none"
    });
}

//contact btn animation
const contactBtnAnimTL = gsap.timeline({paused:true});
contactBtnAnimTL
.from(".home-contact-text", {
    yPercent: -50,
    alpha: 0,
    duration:0.75,
    stagger:0.5
},"-=0.2")
.from("#home-contact-arrow", {
    xPercent: -10,
    alpha: 0,
    duration:0.75
},"-=0.2")

export function contactBtnAnim(){

    ScrollTrigger.create({
        animation:contactBtnAnimTL,
        trigger: "#home-contact",
        start:"top 500px",
        id: "home-contact",
        //markers: true,
        toggleActions: "play none none none"
    });
}

//parallax
// export function parallax(){
//     gsap.utils
//   .toArray(".thumbnails-container .thumbnails,.thumbnails-container .thumbnails-hover")
//   .forEach((div, img) => {
//     const heightDiff =
//     img.offsetHeight - div.parentElement.offsetHeight;

//     // gsap.to(section, {
//     //   scrollTrigger: {
//     //     trigger: section.parentElement,
//     //     scrub: true
//     //   },
//     //   y: section.parentElement.offsetHeight - section.offsetHeight,
//     //   ease: "none"
//     // });

//     gsap.fromTo(
//         img,
//       {
//         y: heightDiff
//       },
//       {
//         y: 0,
//         ease: "none",
//         scrollTrigger: {
//           trigger: ".thumbnails-container",
//           markers:true,
//           scrub: true
//         }
//       }
//     );
//   });
// }