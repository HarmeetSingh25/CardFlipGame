let arr = ["❤️", "🍏", "🍉", "🎒", "🐶", "🐥", "🦄", "🧠", "🍆", "🥐"];
let mainArr = [...arr, ...arr];
let shuffel = mainArr.sort(() => Math.random() - 0.5);

console.log(shuffel);

let CardMainContainer = document.querySelector(".Card-Main-Container");

mainArr.forEach((element) => {
  let id = Math.floor(Math.random() * 100) + 1;

  let card = document.createElement("div");
  card.classList.add("card");
  card.id = id;

  let ct = document.createElement("div");
  ct.classList.add("ct");
  ct.innerHTML = element;

  let cb = document.createElement("div");
  cb.classList.add("flip");

  card.appendChild(ct);
  card.appendChild(cb);
  CardMainContainer.appendChild(card);
});

let cards = document.querySelectorAll(".card");

cards.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      e.target.style.backgroundColor = "blue";
    }, 1000);
  });
});
