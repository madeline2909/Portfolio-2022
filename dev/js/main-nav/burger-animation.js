import {gsap} from "gsap";
var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each time
gsap.set(".lines",{transformOrigin:"center"});

//reference to the timeline (burgerAnimationTimeline), to = what you want to animate, what properties?

export const burgerAnimationTimeline = gsap.timeline({paused:true});
burgerAnimationTimeline
                    .addLabel("burgerToX")
                    .to("#header-1-line-3", {duration:burgerAnimationSpeed, x:"6px", alpha:0}, "createX")
                    .to("#header-1-line-2", {duration:burgerAnimationSpeed, x:"6px"}, "createX")
                    .to("#header-1-line-1",{duration: burgerAnimationSpeed, x:"6px", alpha:0},"createX")
                    .to("#header-2-line-3", {duration:burgerAnimationSpeed, x:"6px", alpha:0}, "createX")
                    .to("#header-2-line-2", {duration:burgerAnimationSpeed, x:"6px"}, "createX")
                    .to("#header-2-line-1",{duration: burgerAnimationSpeed, x:"6px", alpha:0},"createX")
                    .to("#header-2-line-4",{duration: burgerAnimationSpeed, x:"6px", opacity:100}, "arrowUp")
                    .to("#header-1-line-4",{duration: burgerAnimationSpeed, x:"6px", opacity:100}, "arrowUp")
                    .addPause()

                    

export const navAnimationTimeline = gsap.timeline({paused:true});
navAnimationTimeline.addLabel("navColor")
                    .to("#burger-container-1", {duration:burgerAnimationSpeed, borderLeftColor: "#ECEDEE"}, "borderColor")
                    .to("#header-1", {duration:burgerAnimationSpeed, borderBottomColor: "#ECEDEE"}, "borderColor")
                    .addPause()
