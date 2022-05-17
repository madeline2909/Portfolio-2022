
//Scroll Trigger stuffs
import {heroPinning} from "./global-scroll.js";
import {headerAnimation} from "./global-scroll.js";
import {captionAnimation} from "./global-scroll.js";
import {scrollTop} from "./scrollTop.js";
import {scrollToAnim} from "./global-scroll";
import {moveBtnAnim} from "./global-scroll";

import {galleryImg1Anim} from "./prj-scroll";
import {galleryImg2Anim} from "./prj-scroll";
import {galleryImg3Anim} from "./prj-scroll";
import {galleryImg4Anim} from "./prj-scroll";
import {galleryImg5Anim} from "./prj-scroll";
import {galleryImg6Anim} from "./prj-scroll";

// //jquery
// import {mouseEvent} from "./main-nav/burger-mouse.js";
import {burgerClick} from "./main-nav/burger-mouse.js";
import {navClick} from "./main-nav/main-nav-click.js";
import {reportWindowSize} from "./main-nav/nav-global.js";
import {menuBgSelect} from "./main-nav/nav-global.js";



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

galleryImg1Anim();
galleryImg2Anim();
galleryImg3Anim();
galleryImg4Anim();
galleryImg5Anim();
galleryImg6Anim();

burgerClick();
navClick();
reportWindowSize();
menuBgSelect();

// //barba
// import {pageTransition} from "./main-nav/nav-global.js";

// // import {pageTransition} from "./barba.js";
// pageTransition();
// import {pageTransition} from "./transition.js";
// pageTransition();
