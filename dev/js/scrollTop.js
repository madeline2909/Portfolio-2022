import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollTop(){
  console.log("scroll back to top");
  document.querySelectorAll(".topBtn").forEach(
    a => {
    a.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:0});
    });
    }
  );
}
export function scrollIndex(){
  console.log("scroll back to top");
  document.querySelectorAll("#featured-prj").forEach(
    a => {
    a.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:"#home-selected"});
    });
    }
  );
}
