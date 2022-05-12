import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//scroll-1
const galleryImg1 = document.querySelectorAll( '.scroll-1 a img' );
const galleryImg1Scroll = gsap.timeline({paused:true});
galleryImg1Scroll
.from(galleryImg1, {
    yPercent: 20,
    alpha: 0,
    duration:0.75,
    stagger:{
        each: 0.2
    }
})
gsap.set(galleryImg1,{alpha:"0"});

export function galleryImg1Anim(){
    ScrollTrigger.create({
        animation: galleryImg1Scroll,
        trigger: ".scroll-1",
        //markers: true,
        start: "top 400px",
        //scrub: 1,
        toggleActions: "play none none none"
    });
}

//scroll-2
const galleryImg2 = document.querySelectorAll( '.scroll-2 a img' );
const galleryImg2Scroll = gsap.timeline({paused:true});
galleryImg2Scroll
.from(galleryImg2, {
    yPercent: 20,
    alpha: 0,
    duration:0.5,
    stagger:{
        each: 0.1
    }
})
gsap.set(galleryImg2,{alpha:"0"});

export function galleryImg2Anim(){
    ScrollTrigger.create({
        animation: galleryImg2Scroll,
        trigger: ".scroll-2",
        //markers: true,
        start: "top 400px",
        toggleActions: "play none none none"
    });
}

//scroll-3
const galleryImg3 = document.querySelectorAll( '.scroll-3 a img' );
const galleryImg3Scroll = gsap.timeline({paused:true});
galleryImg3Scroll
.from(galleryImg3, {
    yPercent: 20,
    alpha: 0,
    duration:0.5,
    stagger:{
        each: 0.1
    }
})
gsap.set(galleryImg3,{alpha:"0"});

export function galleryImg3Anim(){
    ScrollTrigger.create({
        animation: galleryImg3Scroll,
        trigger: ".scroll-3",
        //markers: true,
        start: "top 400px",
        toggleActions: "play none none none"
    });
}

//scroll-4
const galleryImg4 = document.querySelectorAll( '.scroll-4 a img' );
const galleryImg4Scroll = gsap.timeline({paused:true});
galleryImg4Scroll
.from(galleryImg4, {
    yPercent: 20,
    alpha: 0,
    duration:0.5,
    stagger:{
        each: 0.1
    }
})
gsap.set(galleryImg4,{alpha:"0"});

export function galleryImg4Anim(){
    ScrollTrigger.create({
        animation: galleryImg4Scroll,
        trigger: ".scroll-4",
        //markers: true,
        start: "top 400px",
        toggleActions: "play none none none"
    });
}

//scroll-5
const galleryImg5 = document.querySelectorAll( '.scroll-5 a img' );
const galleryImg5Scroll = gsap.timeline({paused:true});
galleryImg5Scroll
.from(galleryImg5, {
    yPercent: 20,
    alpha: 0,
    duration:0.5,
    stagger:{
        each: 0.1
    }
})
gsap.set(galleryImg5,{alpha:"0"});

export function galleryImg5Anim(){
    ScrollTrigger.create({
        animation: galleryImg5Scroll,
        trigger: ".scroll-5",
        //markers: true,
        start: "top 400px",
        toggleActions: "play none none none"
    });
}

//scroll-6
const galleryImg6 = document.querySelectorAll( '.scroll-6 a img' );
const galleryImg6Scroll = gsap.timeline({paused:true});
galleryImg6Scroll
.from(galleryImg6, {
    yPercent: 20,
    alpha: 0,
    duration:0.5,
    stagger:{
        each: 0.1
    }
})
gsap.set(galleryImg6,{alpha:"0"});

export function galleryImg6Anim(){
    ScrollTrigger.create({
        animation: galleryImg6Scroll,
        trigger: ".scroll-6",
        //markers: true,
        start: "top 400px",
        toggleActions: "play none none none"
    });
}

