const bestColor = (element1) => {
  element1.preventDefault();
  alert("Charcoal");
};
let favoriteColor = document.getElementById("color");

favoriteColor.addEventListener("click", bestColor);

const bestPlace = (element2) => {
  element2.preventDefault();
  alert("Challenger Deep");
};
let favoritePlace = document.getElementById("place");

favoritePlace.addEventListener("click", bestPlace);

const bestRitual = (element3) => {
  element3.preventDefault();
  alert("Summoning Cthulu");
};
let favoriteRitual = document.getElementById("ritual");

favoriteRitual.addEventListener("click", bestRitual);
