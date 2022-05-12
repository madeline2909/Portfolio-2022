import {gsap} from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollTop(){
  document.querySelectorAll(".topBtn").forEach(
    a => {
    a.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:0});
    });
    }
  );
}
