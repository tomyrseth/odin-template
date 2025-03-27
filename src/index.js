import "./styles.css";

import { homeLoad } from "./home.js";
import { homeToggle } from "./home.js"

import { aboutLoad } from "./about.js";
import { aboutToggle } from "./about.js"

import { menuLoad } from "./menu.js";
import { menuToggle } from "./menu.js"

homeLoad();
menuLoad();
aboutLoad();

const toggleArr = [homeToggle, menuToggle, aboutToggle];

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener('click', () => toggler(event.target.id))
})

function toggler(name) {
  toggleArr.forEach(fun => {
    if (fun.name === name) {
      fun(true);
      return 1;
    };
    fun(false);
  });
};