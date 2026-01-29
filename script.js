let arr = ["❤️", "🍏", "🍉", "🎒", "🐶", "🐥", "🦄", "🧠"];
let mainArr = [...arr, ...arr];

let shuffel = mainArr.sort(() => Math.random() - 0.5);
console.log(shuffel);
let CardMainContainer = document.querySelector(".Card-Main-Container");
let card = document.createElement("div");
card.classList.add("card");
let ct = document.createElement("div");
ct.classList.add("ct");

let cb = document.createElement("div");
cb.classList.add("flip");
cb.classList.add("cb");
CardMainContainer.appendChild(card);
card.appendChild(ct);
card.appendChild(cb);
console.log(CardMainContainer);

