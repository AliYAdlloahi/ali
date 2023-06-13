// handle menu toggle
const closeIcon = document.querySelector(".closeNav");
const nav = document.querySelector("nav");
const menu = document.querySelector(".content >button");

closeIcon.addEventListener("click", function (e) {
  nav.classList.add("hide");
});

menu.addEventListener("click", function (e) {
  nav.classList.remove("hide");
});

// handle button content
const hero = document.querySelector(".hero");
const buttons = document.querySelector(".nav");
const heading = document.querySelector(".cool >h1");
const description = document.querySelector(".cool >h2");

let index = 0;
const data = [
  {
    url: "./images/desktop-image-hero-1.jpg",
    heading: "ممد حرامزاده",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium
sdfs biidsfs, aperiam illum zxcv suscipit cvbc perferendis
ullam, minus ,hnj! Necessitatibus facere eaque officiis unde quibusdam,
qui laborum nobis.`,
  },
  {
    url: "./images/desktop-image-hero-2.jpg",
    heading: "درد مریم ب جانم ",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium
voluptatem quas, aperiam illum temporibus suscipit xcvxc perferendis
ullam, minus xcvx! Necessitatibus facere eaque officiis unde quibusdam,
qui laborum xvxc.`,
  },
  {
    url: "./images/desktop-image-hero-3.jpg",
    heading: "kerendi haram zade",
    des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium
voluptatem quas, aperiam illum temporibus suscipit dignissimos perferendis
ullam, minus distinctio! Necessitatibus facere eaque officiis unde quibusdam,
qui laborum nobis.`,
  },
];

buttons.lastElementChild.addEventListener("click", function (e) {
  if (index < data.length - 1) index++;
  else index = 0;
  heading.textContent = data[index].heading;
  description.textContent = data[index].des;
  hero.style.backgroundImage = "url(" + data[index].url;
});

buttons.firstElementChild.addEventListener("click", function (e) {
  if (index > 0) index--;
  else index = data.length - 1;
heading.textContent = data[index].heading;
description.textContent = data[index].des;
  console.log(index);
  hero.style.backgroundImage = "url(" + data[index].url;
});
