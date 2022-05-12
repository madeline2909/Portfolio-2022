// import * as fancybox from './fancyBox.js';
//import {tns} from 'tiny-slider.js';


//Scroll Trigger stuffs
import {heroPinning} from "./global-scroll.js";
import {headerAnimation} from "./global-scroll.js";
import {captionAnimation} from "./global-scroll.js";
import {scrollToAnim} from "./global-scroll";
import {moveBtnAnim} from "./global-scroll";

// import {footerAnimation} from "./sections/footer-scroll.js";
// import {indexTitleAnimation} from "./sections/index-scroll.js";
// import {galleryAnimation} from "./sections/gallery-scroll.js";
// import {galleryPinning} from "./sections/gallery-scroll.js";
// import {contactAnimation} from "./sections/contact-scroll.js";
// import {contactPinning} from "./sections/contact-scroll.js";

// //jquery
// import {mouseEvent} from "./main-nav/burger-mouse.js";
import {burgerClick} from "./main-nav/burger-mouse.js";
import {navClick} from "./main-nav/main-nav-click.js";
import {reportWindowSize} from "./main-nav/nav-global.js";
import {menuBgSelect} from "./main-nav/nav-global.js";
import {scrollTop} from "./scrollTop.js";

scrollTop();
moveBtnAnim();
//windowScroll();
//topFunction();

//fancybox
import {fancyBox} from "./fancyBox.js";
fancyBox();

// //calling the scrolltrigger functions
headerAnimation();
captionAnimation();
heroPinning();
scrollToAnim();

// indexTitleAnimation();
// contactAnimation();
// contactPinning();
// galleryAnimation();
// galleryPinning();

// mouseEvent();
burgerClick();
navClick();
reportWindowSize();
menuBgSelect();
// headerScroll(); 

// $(".topBtn").click(function() {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
// });
