//****************************************//****************************************
//****************************************TRANSTION//****************************************
//****************************************//****************************************
//import JsPlugin from '@swup/js-plugin';
//import DebugPlugin from '@swup/debug-plugin';
//import {gsap} from "gsap";

// import {scrollTop} from "./scrollTop.js";
// import {scrollToAnim} from "./global-scroll.js";
// import {moveBtnAnim} from "./global-scroll";

// enable swup
import Swup from 'swup';
import SwupFadeTheme from "@swup/fade-theme";

// setTimeout(function () {
//   document.documentElement.classList.remove("is-animating");
// }, 100);

const swup = new Swup({
  plugins: [new SwupFadeTheme()]
});
// const swup = new Swup({
//     linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
//     plugins: [
//         new JsPlugin([
//             {
//                 from: '(.*)',
//                 to: '(.*)',
//                 in: () => {
//                     document.querySelector('#swup').style.opacity = 0;
//                     gsap.to(document.querySelector('#swup'), {
//                                         opacity: 0,
//                                         y:"-100vh",
//                                         ease:"Power2.easeInOut",
//                                         duration: 1.25
//                                     });
//                 },
//                 out: () => {
//                     document.querySelector('#swup').style.opacity = 1;
//                     gsap.from(document.querySelector('#swup'), {
//                         opacity: 0,
//                         y:"100vh",
//                         ease:"Power2.easeInOut",
//                         duration: 1.25
//                     });
//                 }
//             }
//         ]),
//         //new DebugPlugin()
//     ]
// });

// swup.on('contentReplaced', function () {
//     document.querySelectorAll('[data-swup]').forEach(function (container) {
//         loadComponents(components, container);
//     });
// });
export function pageTransition(){
    swup.on('contentReplaced', function () {
        window.scrollTo(0, 0);
        /*GSAP */
        // scrollToAnim();
        // scrollTop();
        // moveBtnAnim();
    });
}