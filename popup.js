import { data } from "./value.js";
const left = document.getElementById("left");
const right = document.getElementById("right");
const rightmost = document.getElementById("right-most");
let index = Math.floor(Math.random() * data.length);
left.innerHTML = data[index].Ds;
right.innerHTML = data[index].Tc;
rightmost.innerHTML = data[index].Sc;