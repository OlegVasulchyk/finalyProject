import "./contact.scss";

import { renderHeader } from "../common/scripts/render-header";
import { renderNavigation } from "./render-navigation";
import { renderMain } from "./render-main";
import { renderFooter } from "../common/scripts/render-footer";
import { showVisible } from "../common/scripts/parallax";
import { smoothScroll } from "../common/scripts/anchor";

renderHeader();
renderNavigation();
renderMain();
renderFooter();

const body = document.querySelector("body");
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
  btn.classList.toggle("active");
  btnIcon.classList.toggle("active");
});

backdrop.addEventListener("click", () => {
  menu.classList.remove("active");
  backdrop.classList.remove("active");
  btn.classList.remove("active");
  btnIcon.classList.remove("active");
});

window.addEventListener("scroll", showVisible);
showVisible();
window.addEventListener("scroll", function() {
  const arrowTop = document.querySelector(".arrowTop");
  if (pageYOffset > 650) {
    arrowTop.classList.remove("activate-of");
    arrowTop.classList.add("activate");
    this.setTimeout(() => {
      arrowTop.classList.remove("activate");
      arrowTop.classList.add("activate-of");
    }, 7000);
  }
});

const form = document.querySelector(".form");
