import "./styles.css";
import { homePage } from "./home";
import { aboutPage } from "./about";
import { menuPage } from "./menu";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homePage();

homeBtn.addEventListener("click", () => {
  homePage();
});

menuBtn.addEventListener("click", () => {
  menuPage();
});

aboutBtn.addEventListener("click", () => {
  aboutPage();
});

// homeBtn.addEventListener("click", homePage);
// menuBtn.addEventListener("click", menuPage);
// aboutBtn.addEventListener("click", aboutPage);
