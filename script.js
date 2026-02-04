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
let count = 0;
let cards = document.querySelectorAll(".card");
let flag = 0;
let selectCar = [];
cards.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let ct = elem.querySelector(".ct");

    if (flag == 2) {
      // selectCar = [];
      flag = 0;
      return;
    } else {
      flag++;
      e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
      selectCar.push(ct.innerHTML);
    }
    if (selectCar.length == 2) {
      if (selectCar[0] === selectCar[1]) {
        count += 2;
        console.log(count);
        cards.forEach((val) => {
          let ct = val.querySelector(".ct");
          if (ct.innerHTML == selectCar[0]) {
            val.style.transition = "all 0.2s ease ";
            setTimeout(() => {
              val.style.display = "none";
            }, 1000);
          }
        });
      }
    }
    
    if (count == 20) {
      alert("Game is complete Press ok for play again");
      window.location.reload();
    }
    setTimeout(() => {
      e.target.style.backgroundColor = "blue";
      selectCar = [];
    }, 2000);
  });
});
