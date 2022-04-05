import {gsap} from "gsap";
var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each time
gsap.set(".lines",{transformOrigin:"center"});

//reference to the timeline (burgerAnimationTimeline), to = what you want to animate, what properties?

export const burgerAnimationTimeline = gsap.timeline({paused:true});
burgerAnimationTimeline
                    .addLabel("burgerToX")
                    .to("#line-3", {duration:burgerAnimationSpeed, x:"6px", alpha:0}, "createX")
                    .to("#line-2", {duration:burgerAnimationSpeed, x:"6px"}, "createX")
                    .to("#line-1",{duration: burgerAnimationSpeed, x:"6px", alpha:0},"createX")
                    .to("#line-4",{duration: burgerAnimationSpeed, x:"6px", opacity:100})
                    .addPause()

                    

export const navAnimationTimeline = gsap.timeline({paused:true});
navAnimationTimeline.addLabel("navColor")
                    .to("#burger-container", {duration:burgerAnimationSpeed, borderLeftColor: "#ECEDEE"}, "borderColor")
                    .to("header", {duration:burgerAnimationSpeed, borderBottomColor: "#ECEDEE"}, "borderColor")
                    .addPause()
