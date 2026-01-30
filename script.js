let arr = ["❤️", "🍏", "🍉", "🎒", "🐶", "🐥", "🦄", "🧠" ,"🍆","🥐"];
let mainArr = [...arr, ...arr];
let shuffel = mainArr.sort(() => Math.random() - 0.5);

console.log(shuffel);

let CardMainContainer = document.querySelector(".Card-Main-Container");

mainArr.forEach(element => {
    let card = document.createElement("div");
    card.classList.add("card");
    
    let ct = document.createElement("div");
    ct.classList.add("ct");
    ct.innerHTML=element
    
    let cb = document.createElement("div");
    cb.classList.add("flip");
    cb.classList.add("cb");
    
    card.appendChild(ct);
    card.appendChild(cb);
    CardMainContainer.appendChild(card);
    // console.log(card);
    
});
let card=document.querySelectorAll(".card")

card.forEach(elem=>{

    
})


// console.log(CardMainContainer);
